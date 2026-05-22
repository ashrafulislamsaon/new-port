/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color preferences matching background #050816 and accent neon colors (#00f5ff, #7c3aed, #06b6d4)
    const primaryColor = { r: 124, g: 58, b: 237 }; // #7c3aed (violet)
    const secondaryColor = { r: 0, g: 245, b: 255 }; // #00f5ff (neon cyan)

    // Handle mouse move
    const mouse = { x: width / 2, y: height / 2, tx: width / 2, ty: height / 2, speed: 0.08 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.tx = e.touches[0].clientX;
        mouse.ty = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Resize observer
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle class for floating elements
    interface Particle {
      x: number;
      y: number;
      z: number; // For depth simulation
      size: number;
      baseSpeedY: number;
      speedX: number;
      color: 'primary' | 'secondary' | 'neutral';
      opacity: number;
    }

    const particles: Particle[] = [];
    const maxParticles = width < 768 ? 45 : 110;

    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5, // perspective multiplier
        size: Math.random() * 1.5 + 0.5,
        baseSpeedY: - (Math.random() * 0.4 + 0.1),
        speedX: (Math.random() * 0.2 - 0.1),
        color: Math.random() > 0.6 ? 'secondary' : Math.random() > 0.4 ? 'primary' : 'neutral',
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // 3D grid line rendering parameters
    let gridOffset = 0;

    // Simulation loop
    const render = () => {
      // Background base
      ctx.fillStyle = '#050816';
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse follow
      mouse.x += (mouse.tx - mouse.x) * mouse.speed;
      mouse.y += (mouse.ty - mouse.y) * mouse.speed;

      // Draw active background glows in corners (glowing gradients)
      const centerGlowX = width / 2 + (mouse.x - width / 2) * 0.15;
      const centerGlowY = height / 2 + (mouse.y - height / 2) * 0.15;

      // Glow 1: Top Right Purple
      const trGlow = ctx.createRadialGradient(width * 0.8, height * 0.2, 0, width * 0.8, height * 0.2, width * 0.4);
      trGlow.addColorStop(0, 'rgba(124, 58, 237, 0.12)');
      trGlow.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = trGlow;
      ctx.fillRect(0, 0, width, height);

      // Glow 2: Bottom Left Cyan
      const blGlow = ctx.createRadialGradient(width * 0.15, height * 0.8, 0, width * 0.15, height * 0.8, width * 0.5);
      blGlow.addColorStop(0, 'rgba(6, 182, 212, 0.1)');
      blGlow.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = blGlow;
      ctx.fillRect(0, 0, width, height);

      // Glow 3: Mouse tracking faint white glow
      const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, width * 0.15);
      mouseGlow.addColorStop(0, 'rgba(0, 245, 255, 0.04)');
      mouseGlow.addColorStop(1, 'rgba(5, 8, 22, 0)');
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle 3D futuristic floating wires / grid at the bottom portion of screen
      ctx.strokeStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b}, 0.035)`;
      ctx.lineWidth = 1;
      
      const horizon = height * 0.55;
      const gridCount = 20;
      gridOffset += 0.3;
      if (gridOffset >= 40) gridOffset = 0;

      // Render perspective lines originating from horizon
      for (let i = 0; i < gridCount; i++) {
        const xPos = (width / (gridCount - 1)) * i;
        ctx.beginPath();
        ctx.moveTo(xPos, height);
        // Tilt based on mouse location
        const targetX = width / 2 + (xPos - width / 2) * 0.3 + (mouse.x - width / 2) * 0.05;
        ctx.lineTo(targetX, horizon);
        ctx.stroke();
      }

      // Render horizontal lines flowing towards user
      for (let i = 0; i < 8; i++) {
        // Logarithmic scale for perspective density
        const ratio = (i + (gridOffset / 40)) / 8;
        const currentY = horizon + (height - horizon) * Math.pow(ratio, 2.5);
        ctx.strokeStyle = `rgba(0, 245, 255, ${0.015 + ratio * 0.05})`;
        ctx.beginPath();
        ctx.moveTo(0, currentY);
        ctx.lineTo(width, currentY);
        ctx.stroke();
      }

      // Draw particles (3D layers)
      particles.forEach((p) => {
        // Move particle
        // Mouse interaction: slight drift away from mouse cursor
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        
        let mouseInfluenceX = 0;
        let mouseInfluenceY = 0;
        
        if (dist < 220) {
          const force = (220 - dist) / 220;
          mouseInfluenceX = (dx / dist) * force * 1.5;
          mouseInfluenceY = (dy / dist) * force * 1.5;
        }

        p.y += p.baseSpeedY * p.z + mouseInfluenceY;
        p.x += p.speedX * p.z + mouseInfluenceX;

        // Loop screen checks
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10 || p.x > width + 10) {
          p.x = Math.random() * width;
        }

        // Project coordinate with slight tilt relative to mouse
        const drawX = p.x + (mouse.x - width / 2) * 0.03 * p.z;
        const drawY = p.y + (mouse.y - height / 2) * 0.03 * p.z;

        // Choose color
        let fillStyle = 'rgba(255,255,255,';
        if (p.color === 'primary') {
          fillStyle = `rgba(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b},`;
        } else if (p.color === 'secondary') {
          fillStyle = `rgba(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b},`;
        }

        ctx.fillStyle = fillStyle + p.opacity + ')';
        ctx.beginPath();
        // Glow effect for larger particles
        if (p.size * p.z > 2) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color === 'secondary' ? '#00f5ff' : '#7c3aed';
        }
        ctx.arc(drawX, drawY, p.size * p.z, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw subtle orbital rings to create technical depth in center
      const centerCircleX = width * 0.8;
      const centerCircleY = height * 0.35 + (mouse.y - height / 2) * 0.05;
      
      ctx.strokeStyle = 'rgba(124, 58, 237, 0.06)';
      ctx.beginPath();
      ctx.arc(centerCircleX, centerCircleY, 180, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(0, 245, 255, 0.04)';
      ctx.beginPath();
      ctx.arc(centerCircleX, centerCircleY, 280, 0, Math.PI * 2);
      ctx.stroke();

      // Draw small glowing cross star symbols as static reference nodes
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      const nodeX = width * 0.2;
      const nodeY = height * 0.2;
      ctx.beginPath();
      ctx.moveTo(nodeX - 4, nodeY);
      ctx.lineTo(nodeX + 4, nodeY);
      ctx.moveTo(nodeX, nodeY - 4);
      ctx.lineTo(nodeX, nodeY + 4);
      ctx.stroke();

      const nodeX2 = width * 0.85;
      const nodeY2 = height * 0.75;
      ctx.beginPath();
      ctx.moveTo(nodeX2 - 4, nodeY2);
      ctx.lineTo(nodeX2 + 4, nodeY2);
      ctx.moveTo(nodeX2, nodeY2 - 4);
      ctx.lineTo(nodeX2, nodeY2 + 4);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="floating-canvas-renderer"
      className="fixed inset-0 top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
