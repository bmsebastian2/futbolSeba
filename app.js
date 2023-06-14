const wrapper = document.querySelector(".wrapper");
const ticket = document.querySelector(".ticket");
const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

if (window.innerWidth <= 768) {
  window.addEventListener("deviceorientation", handleOrientation, true);

  function handleOrientation(event) {
    ticket.style.transition = "none";
    // const absolute = event.absolute;
    // const alpha = event.alpha;
    const y = event.beta;
    const x = event.gamma;
    var windowWidth = window.innerWidth;
    var maxX = windowWidth - cuadrado.offsetWidth;
    var maxY = windowHeight - cuadrado.offsetHeight;
    var posX = (x / 90) * maxX; // Movimiento en el eje X
    var posY = (y / 90) * maxY; // Movimiento en el eje Y

    const roX = ((x - halfWidth) / halfWidth) * 10;
    const roY = ((y - halfHeight) / halfHeight) * 10;

    ticket.style.transform = `rotateX(${posX}deg) rotateY(${posY}deg) `;
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
