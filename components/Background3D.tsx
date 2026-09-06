"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07090e, 0.008);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 35);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lighting System
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x3b82f6, 2.5); // Primary Blue
    dirLight1.position.set(20, 40, 20);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf97316, 2.0); // Orange Accent
    dirLight2.position.set(-20, -30, -10);
    scene.add(dirLight2);

    // Interactive mouse point light
    const mouseLight = new THREE.PointLight(0x06b6d4, 4, 60);
    scene.add(mouseLight);

    // Orbiting colorful point lights
    const orbitLight1 = new THREE.PointLight(0x8b5cf6, 3, 50); // Violet
    const orbitLight2 = new THREE.PointLight(0x3b82f6, 3, 50); // Sky Blue
    scene.add(orbitLight1);
    scene.add(orbitLight2);

    // 5. Starfield / Particle Cloud (2,000 points)
    const particleCount = 2000;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    const colors = [
      new THREE.Color("#3b82f6"),
      new THREE.Color("#f97316"),
      new THREE.Color("#06b6d4"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#38bdf8"),
      new THREE.Color("#ec4899"),
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 140;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 260;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 90;

      const c = colors[Math.floor(Math.random() * colors.length)];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;

      particleScales[i] = Math.random() * 0.4 + 0.1;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Floating 3D Cyber Geometries across vertical scroll page
    const shapesGroup = new THREE.Group();
    scene.add(shapesGroup);

    interface ShapeItem {
      group: THREE.Group;
      rotX: number;
      rotY: number;
      rotZ: number;
      floatSpeed: number;
      floatOffset: number;
      baseY: number;
    }

    const shapes: ShapeItem[] = [];

    const createImpressiveShape = (
      geo: THREE.BufferGeometry,
      colorHex: number,
      pos: [number, number, number],
      scale: number = 1
    ) => {
      const group = new THREE.Group();

      // Outer Wireframe Mesh with Emissive Glow
      const wireMat = new THREE.MeshStandardMaterial({
        color: colorHex,
        wireframe: true,
        roughness: 0.2,
        metalness: 0.8,
        emissive: colorHex,
        emissiveIntensity: 0.4,
        transparent: true,
        opacity: 0.65,
      });
      const wireMesh = new THREE.Mesh(geo, wireMat);
      group.add(wireMesh);

      // Inner Semi-Transparent Core Mesh
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: colorHex,
        roughness: 0.1,
        metalness: 0.9,
        transparent: true,
        opacity: 0.25,
        clearcoat: 1.0,
        emissive: colorHex,
        emissiveIntensity: 0.2,
      });
      const coreMesh = new THREE.Mesh(geo, coreMat);
      coreMesh.scale.setScalar(0.92);
      group.add(coreMesh);

      // Glowing Vertex Points
      const pointsMat = new THREE.PointsMaterial({
        color: colorHex,
        size: 0.25,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const pointsMesh = new THREE.Points(geo, pointsMat);
      group.add(pointsMesh);

      group.position.set(...pos);
      group.scale.setScalar(scale);
      shapesGroup.add(group);

      shapes.push({
        group,
        rotX: (Math.random() - 0.5) * 0.012,
        rotY: (Math.random() - 0.5) * 0.014,
        rotZ: (Math.random() - 0.5) * 0.008,
        floatSpeed: 0.6 + Math.random() * 0.8,
        floatOffset: Math.random() * Math.PI * 2,
        baseY: pos[1],
      });
    };

    // Hero Section 3D Objects
    createImpressiveShape(new THREE.IcosahedronGeometry(6.5, 1), 0x3b82f6, [18, 10, 2], 1.2);
    createImpressiveShape(new THREE.TorusKnotGeometry(4.5, 1.2, 80, 16), 0xf97316, [-20, -5, -4], 1.1);
    createImpressiveShape(new THREE.OctahedronGeometry(4.5, 0), 0x06b6d4, [22, -18, -6], 1.0);

    // Experience & About Section 3D Objects
    createImpressiveShape(new THREE.DodecahedronGeometry(5.5, 0), 0x8b5cf6, [-22, -38, -2], 1.15);
    createImpressiveShape(new THREE.TorusGeometry(5, 0.8, 20, 60), 0x38bdf8, [20, -58, -5], 1.1);

    // Skills & Projects Section 3D Objects
    createImpressiveShape(new THREE.IcosahedronGeometry(5, 0), 0xec4899, [-20, -80, -4], 1.1);
    createImpressiveShape(new THREE.OctahedronGeometry(5.5, 1), 0x3b82f6, [22, -105, -2], 1.2);
    createImpressiveShape(new THREE.TorusKnotGeometry(4, 1.0, 70, 14), 0xf97316, [-18, -135, -5], 1.05);

    // Contact & Footer 3D Objects
    createImpressiveShape(new THREE.DodecahedronGeometry(5, 1), 0x06b6d4, [18, -165, -3], 1.1);
    createImpressiveShape(new THREE.IcosahedronGeometry(6, 1), 0x8b5cf6, [-20, -195, -2], 1.2);

    // 7. Event Handlers (Mouse & Scroll)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    let targetScrollY = 0;
    let currentScrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // 8. Render & Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth interpolation for mouse and scroll movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      currentScrollY += (targetScrollY - currentScrollY) * 0.06;

      // Update Camera Position & Parallax Tilt
      camera.position.x = mouseX * 5;
      camera.position.y = -mouseY * 4 - currentScrollY * 0.035;
      camera.lookAt(0, -currentScrollY * 0.035, 0);

      // Move Interactive Spotlight with Mouse
      mouseLight.position.x = mouseX * 25;
      mouseLight.position.y = -mouseY * 20 - currentScrollY * 0.035;
      mouseLight.position.z = 15;

      // Orbiting lights motion
      orbitLight1.position.x = Math.sin(time * 0.7) * 25;
      orbitLight1.position.y = Math.cos(time * 0.5) * 25 - currentScrollY * 0.035;
      orbitLight1.position.z = Math.cos(time * 0.7) * 15;

      orbitLight2.position.x = Math.cos(time * 0.6) * 25;
      orbitLight2.position.y = Math.sin(time * 0.8) * 25 - currentScrollY * 0.035;
      orbitLight2.position.z = Math.sin(time * 0.6) * 15;

      // Rotate Particles
      particles.rotation.y = time * 0.04 + mouseX * 0.15;
      particles.rotation.x = time * 0.02 + mouseY * 0.15;

      // Animate 3D Shapes
      shapes.forEach((item) => {
        item.group.rotation.x += item.rotX;
        item.group.rotation.y += item.rotY;
        item.group.rotation.z += item.rotZ;

        item.group.position.y =
          item.baseY + Math.sin(time * item.floatSpeed + item.floatOffset) * 2.2;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);

      particleGeo.dispose();
      particleMat.dispose();

      shapes.forEach((item) => {
        item.group.traverse((child) => {
          if (child instanceof THREE.Mesh || child instanceof THREE.Points) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      });

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
