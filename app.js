const wrapper = document.querySelector(".wrapper");
const ticket = document.querySelector(".ticket");
const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

if (window.innerWidth <= 968) {
  if (window.DeviceMotionEvent) {
    window.addEventListener("devicemotion", handleMotion);

    function handleMotion(event) {
      const ax = event.accelerationIncludingGravity.x;
      const ay = event.accelerationIncludingGravity.y;
      ticket.style.transition = "none";

      ticket.style.transform = `rotateX(${ay * 4}deg) rotateY(${ax * 4}deg)`;
      if (ax === 0 && ay === 0) {
        ticket.style.transition = "transform .5s ease-in-out";
        ticket.style.transform = `rotateX(0deg) rotateY(0deg)`;
      }
    }
  }
} else {
  window.addEventListener("mousemove", (event) => {
    ticket.style.transition = "none";
    const { pageX, pageY } = event;

    const rotationX = ((pageX - halfWidth) / halfWidth) * 10;
    const rotationY = ((pageY - halfHeight) / halfHeight) * 10;

    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg) `;
  });
  window.addEventListener("mouseleave", () => {
    ticket.style.transition = "transform .5s ease-in-out";
    ticket.style.transform = `rotateX(0deg) rotateY(0deg) `;
  });
}
