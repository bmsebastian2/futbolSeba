document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = [].slice.call(document.querySelectorAll(".lazy"));
  var backgroundLazyImages = [].slice.call(
    document.querySelectorAll(".lazyBackground")
  );

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    let lazyBackground = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;

          if (lazyImage.getAttribute("poster")) {
            lazyImage.setAttribute("poster", lazyImage.dataset.src);
          } else {
            lazyImage.classList.add(
              lazyImage.classList.contains("right") ? "side-right" : "card"
            );
          }

          lazyBackground.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });

    backgroundLazyImages.forEach(function (lazyImage) {
      lazyBackground.observe(lazyImage);
    });
  } else {
    // Possibly fall back to event handlers here
  }
});
