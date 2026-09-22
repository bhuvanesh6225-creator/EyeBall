document.addEventListener("mousemove", function(event) {
  let eyeball1 = document.getElementById("eyeball1");
  let eyeball2 = document.getElementById("eyeball2");

  // Eye1 center
  let eye1 = document.getElementById("eye1").getBoundingClientRect();
  let centerX1 = eye1.left + eye1.width/2;
  let centerY1 = eye1.top + eye1.height/2;

  // Mouse position
  let x = event.clientX;
  let y = event.clientY;

  // Angle calculation (same for both eyes)
  let angle = Math.atan2(y - centerY1, x - centerX1);

  // Move eyeballs (max 25px inside eye)
  let radius = 25;
  let moveX = Math.cos(angle) * radius;
  let moveY = Math.sin(angle) * radius;

  eyeball1.style.transform = `translate(${moveX}px, ${moveY}px)`;
  eyeball2.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
