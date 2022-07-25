// The people that are displayed can be dependent upon the information that we have about the audience
// The background image can also be dependent

const tl1 = gsap.timeline({ repeatRefresh: true });

//Stage 1: introducing NS and grab attention
tl1.from(".overlay", {
  opacity: 0,
});
tl1.from(".header", {
  opacity: 0,
  y: 10,
});
tl1.from(
  ".NSarrow1",
  {
    opacity: 0,
    x: 100,
  },
  "2"
);
tl1.from(
  ".NSarrow2",
  {
    opacity: 0,
    x: -100,
  },
  "<0.2"
);

//Stage 2: open up

tl1.to(
  ".NSarrow1",
  {
    opacity: 0,
    x: -100,
  },
  ">3"
);
tl1.to(
  ".NSarrow2",
  {
    opacity: 0,
    x: 100,
  },
  "<"
);
tl1.to(".overlay", {
  opacity: 0,
});
tl1.to(
  ".background",
  {
    opacity: 0,
  },
  "<0.2"
);
tl1.to(
  ".header",
  {
    y: -200,
  },
  "<"
);

window.addEventListener("click", () => {
  tl1.restart();
});
