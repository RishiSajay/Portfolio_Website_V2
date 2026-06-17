import { useEffect, useRef } from "react";
import "./AnimatedCursor.css";

const AnimatedCursor = () => {
  // Use useRef so variables persist across renders without causing re-renders
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const prevMouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });

  // Use mutable refs for animation tracking variables
  const currentScale = useRef(0);
  const currentAngle = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    // 1. Mouse Move Handler using standard clientX/Y
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animationSpeed = 0.5;

    // 2. Isolated Animation Loop
    const animate = () => {
      const animatedCursor = cursorRef.current; // Safe React DOM reference
      if (!animatedCursor) {
        animationFrameId.current = window.requestAnimationFrame(animate);
        return;
      }

      // Calculate Translate
      circle.current.x += (mouse.current.x - circle.current.x) * animationSpeed;
      circle.current.y += (mouse.current.y - circle.current.y) * animationSpeed;
      const translateTransformation = `translate(${circle.current.x}px, ${circle.current.y}px)`;

      // Calculate Scale (Velocity)
      const deltaMouseX = mouse.current.x - prevMouse.current.x;
      const deltaMouseY = mouse.current.y - prevMouse.current.y;

      prevMouse.current.x = mouse.current.x;
      prevMouse.current.y = mouse.current.y;

      const maxMouseVelocity = 150;
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        maxMouseVelocity,
      );

      const scaleValue = (mouseVelocity / maxMouseVelocity) * 0.5;
      currentScale.current +=
        (scaleValue - currentScale.current) * animationSpeed;
      const scaleTransformation = `scale(${1 + currentScale.current}, ${1 - currentScale.current})`;

      // Calculate Rotate
      const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;
      if (mouseVelocity > 20) {
        currentAngle.current = angle;
      }
      const rotateTransformation = `rotate(${currentAngle.current}deg)`;

      // Apply transformations safely
      animatedCursor.style.transform = `${translateTransformation} ${rotateTransformation} ${scaleTransformation}`;

      // Request next frame safely
      animationFrameId.current = window.requestAnimationFrame(animate);
    };

    // Start loop
    animationFrameId.current = window.requestAnimationFrame(animate);

    // 3. CRITICAL CLEANUP: Runs when component unmounts to prevent production memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty array ensures this entire block setup runs EXACTLY ONCE

  return <div className="animated-cursor" ref={cursorRef}></div>;
};

export default AnimatedCursor;
