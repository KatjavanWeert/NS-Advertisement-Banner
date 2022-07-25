// The people that are displayed can be dependent upon the information that we have about the audience

  const tl = gsap.timeline({ repeatRefresh: true })
  tl.from(".NSarrow1", {
    opacity: 0,
    x: 100,
  });
  tl.from(".NSarrow2", {
    opacity: 0,
    x: -100,
  }, "<0.2");

window.addEventListener("click", () => {
  tl.restart();
});