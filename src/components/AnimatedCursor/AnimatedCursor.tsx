import { useEffect } from "react";
import "./AnimatedCursor.css";

const AnimatedCursor = () => {
  const mouse = { x: 0, y: 0 };
  const prevMouse = { x: 0, y: 0 };
  const circle = { x: 0, y: 0 };
  let currentScale = 0;
  let currentAngle = 0;
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });

  const animationSpeed = 0.5;
  const animate = () => {
    const animatedCursor = document.getElementById("animatedCursor");

    ///////////
    //Translate
    ///////////
    circle.x += (mouse.x - circle.x) * animationSpeed;
    circle.y += (mouse.y - circle.y) * animationSpeed;

    const translateTransformation = `translate(${circle.x}px, ${circle.y}px)`;

    ///////
    //Scale
    ///////
    const deltaMouseX = mouse.x - prevMouse.x;
    const deltaMouseY = mouse.y - prevMouse.y;
    prevMouse.x = mouse.x;
    prevMouse.y = mouse.y;

    // Calculate mouse distance with pythagorean theorem sqrt(a^2 + b^2), since this is distance traveled in one frame, label it as velocity
    const maxMouseVelocity = 150;
    const mouseVelocity = Math.min(
      Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
      maxMouseVelocity
    );

    // Create a scale value in the range [0, 0.5]
    const scaleValue = (mouseVelocity / maxMouseVelocity) * 0.5;

    currentScale += (scaleValue - currentScale) * animationSpeed;

    const scaleTransformation = `scale(${1 + currentScale}, ${
      1 - currentScale
    }) `;

    ////////
    //Rotate
    ////////

    // Get angle in degrees
    const angle = (Math.atan2(deltaMouseY, deltaMouseX) * 180) / Math.PI;

    if (mouseVelocity > 20) {
      currentAngle = angle;
    }
    const rotateTransformation = `rotate(${currentAngle}deg)`;

    // Apply all transformations
    if (animatedCursor) {
      animatedCursor.style.transform = `${translateTransformation} ${rotateTransformation} ${scaleTransformation}`;
    } else {
      console.log("element not found");
    }

    window.requestAnimationFrame(animate);
  };

  useEffect(() => animate);
  //animate();

  return <div className="animated-cursor" id="animatedCursor"></div>;
};

export default AnimatedCursor;
