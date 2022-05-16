const chapters = document.querySelectorAll(".chapter");
let dataInfo = [
  "./animations/103997-celery.json",
  "./animations/102929-duo-cactus.json",
  "./animations/101507-happy-raccoon.json",
  "./animations/102070-thank-you-yoga-style.json",
];

const loadAn = () => {
  return dataInfo.forEach((data, i) => {
    lottie.loadAnimation({
      container: document.querySelector(`.chapter-${i + 1}`), // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: data, // the path to the animation json
    });
  });
};
loadAn();

const loadFile = async (num) => {
  const res = await fetch(`./chapter${num}.txt`);
  const data = await res.text();
  return data;
};
console.log(chapters.length);
const populateData = chapters.forEach(async (ch, i) => {
  ch.children[0].innerText = await loadFile(i + 1);
});

let date = new Date();
let year = date.getFullYear();

document.querySelector(".year span").innerText = year;
