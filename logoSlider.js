const options = {
  arrows: false,
  pagination: false,
  drag: "free",
  focus: "center",
  width: "100%",
  type: "loop",
  padding: 0,
  autoWidth: true,
  autoHeight: true,
  gap: "1.2rem",
  updateOnMove: true,
  autoScroll: {
    speed: 1.5,
  },
};

new Splide("#slider1", options).mount(window.splide.Extensions);

const optionsTwo = {
  type: "loop",
  drag: "free",
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  autoplay: true,
  interval: 3000,
  pauseOnHover: false,
};

new Splide("#slider2", optionsTwo).mount();
