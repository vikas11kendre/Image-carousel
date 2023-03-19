const images = document.querySelectorAll(".image");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const bottom = document.querySelector(".bottom");
let time;
for (let i = 0; i < images.length; i++) {
  const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}
const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";
const button = document.querySelector(".button");
function Slider(n, direction) {
  direction === "right"
    ? (slider.style.transform = `translateX(-${n * 800}px)`)
    : (slider.style.transform = `translateX(-${(n - 2) * 800}px)`);
}
let slideNumber = 1;

function getFirstSlide() {
  slider.style.transform = `translateX(0px)`;
}
function getLastSlide() {
  slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
  slideNumber = images.length;
}

left.addEventListener("click", () => {
  clearInterval(time);
  if (slideNumber <= 1) {
    getLastSlide();
  } else {
    Slider(slideNumber, "left");
    slideNumber -= 1;
  }
  reSetColor();
  changeColor();
  autoPlay();
});
right.addEventListener("click", () => {
  clearInterval(time);
  if (slideNumber >= images.length) {
    getFirstSlide();
    slideNumber = 1;
  } else {
    Slider(slideNumber, "right");
    slideNumber += 1;
    console.log(slideNumber);
  }
  reSetColor();
  changeColor();
  autoPlay();
});

function changeColor() {
  buttons[slideNumber - 1].style.backgroundColor = "white";
}
const reSetColor = () => {
  buttons.forEach((button) => {
    button.style.backgroundColor = "transparent";
  });
};

buttons.forEach((b, i) =>
  b.addEventListener("click", () => {
    clearInterval(time);
    slider.style.transform = `translateX(-${i * 800}px)`;
    slideNumber = i + 1;
    reSetColor();
    changeColor();
    autoPlay();
  })
);

function autoPlay() {
  time = setInterval(() => {
    if (slideNumber >= images.length) {
      getFirstSlide();
      slideNumber = 1;
    } else {
      Slider(slideNumber, "right");
      slideNumber += 1;
      console.log(slideNumber);
    }
    reSetColor();
    changeColor();
  }, 2000);
}
autoPlay();
