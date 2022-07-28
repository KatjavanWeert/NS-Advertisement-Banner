// The people that are displayed can be dependent upon the information that we have about the audience
// The background image can also be dependent

const tl1 = gsap.timeline({ repeatRefresh: true });
const tl2 = gsap.timeline({ repeatRefresh: true });

let firstTravellerClicked = true;
let travellerCount = 2;

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

//Stage 2: open up NS logo and enter train & explanation

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

tl1.fromTo(
  ".train",
  { x: 200, opacity: 0 },
  { duration: 4, opacity: 100, x: -150 }
);

tl1.fromTo(".explanation", { x: -100, opacity: 0 }, { x: 0, opacity: 100 });

tl1.fromTo(".icon", { opacity: 0 }, { opacity: 100, y: -50 });

//Stage 3: Interactive animations

function moveTraveller(classname) {
  if (firstTravellerClicked) {
    tl2.to(".explanation", { x: -50, opacity: 0 });
    tl2.fromTo(".promotion", { x: -50, opacity: 0 }, { x: 0, opacity: 100 });
    firstTravellerClicked = false;
  }
  tl2.to("." + classname, { opacity: 0, y: -50 }, "0");
  tl2.to("." + classname + "InTrain", { opacity: 100, x: 50 });

  travellerCount++;
  tl2.to(".price", { text: { value: calcPrice() } });
}

// function changeSVGcolor(classname, color) {
//   document.getElementsByClassName(classname).setAttribute("fill", color);
// }

function calcPrice() {
  switch (travellerCount) {
    case 2:
      return "€16";
    case 3:
      return "€10,67";
    case 4:
      return "€8,75";
  }
}

/* ***DEBUGGING*** */

window.addEventListener("click", () => {
  //   tl1.restart();
  tl1.progress(1);
});
