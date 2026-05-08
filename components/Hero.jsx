"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshDistortMaterial, Sphere, Text } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FloatingBook = () => {
  const mesh = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = Math.sin(t * 0.5) * 0.2;
      mesh.current.rotation.x = Math.cos(t * 0.3) * 0.1;
      mesh.current.position.y = Math.sin(t * 1.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={mesh}>
        <boxGeometry args={[2.5, 3.5, 0.4]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.8} />
        {/* Pages */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[2.3, 3.3, 0.4]} />
          <meshStandardMaterial color="#f5f5f5" />
        </mesh>
        {/* Title */}
        <Text
          position={[0, 0, 0.21]}
          fontSize={0.3}
          color="white"
          font="https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD7K_gxeUM7K3o3Cc96ToXXB2H9u76MKe4u1VBic.woff"
          anchorX="center"
          anchorY="middle"
        >
          QUIKIE
        </Text>
      </mesh>
    </Float>
  );
};

const Hero = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    // Text reveal animation
    const chars = textRef.current.innerText.split("");
    textRef.current.innerHTML = chars
      .map((c) => `<span class="char" style="display: inline-block">${c === " " ? "&nbsp;" : c}</span>`)
      .join("");

    gsap.from(".char", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.02,
      ease: "expo.out",
      delay: 0.5,
    });

    // Button liquid effect placeholder logic (CSS handles mostly)
    gsap.from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
      delay: 1.5,
    });
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-obsidian">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-electric-cyan/10 blur-[120px] rounded-full" />

      {/* 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
          <FloatingBook />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 ref={textRef} className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 text-white">
          Elevate Your Learning.
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-sans opacity-0 animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          The ultimate notes companion for Amity University Kolkata.
          Immersive, interactive, and ultra-premium.
        </p>

        <button
          ref={buttonRef}
          className="group relative px-8 py-4 bg-white text-obsidian font-bold rounded-full overflow-hidden transition-transform active:scale-95"
        >
          <span className="relative z-10">Get Started</span>
          <div className="absolute inset-0 bg-electric-violet translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
