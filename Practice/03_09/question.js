// JavaScript code​​​​​​‌‌​​‌‌‌​​​‌​‌‌​​​​‌‌​​​​‌ below
// Write your answer here, then test your code.
// Your job is to implement the findLargest() method.

// Change these boolean values to control whether you see
// the expected answer and/or hints.

function Camera(brand, model, year, format, lens, filmType) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.format = format;
  this.lens = lens;
  this.filmType = filmType;
}

const getCurrentYear = () => new Date().getFullYear();

const cameraAge = (year) => getCurrentYear() - year;

// Goal output:
// My camera is a [brand] [model] made in [year] making it [age] years old. It's a [format] camera with a [lens] lens using [filmtype] film.`
const cameraHTML = (myCamera) => {
  // Your code goes between the backticks in `cameraStory` below.
  const cameraStory =
    `My camera is a ${myCamera.brand} ${myCamera.model} made in ${myCamera.year} making it ` +
    cameraAge(myCamera.year) +
    ` years old. It's a ${myCamera.format} camera with a ${myCamera.lens} lens using ${myCamera.filmType} film.`;
  return cameraStory;
};

const myCamera = new Camera(
  "Hasselblad",
  "500C/M",
  1963,
  "medium format",
  "Carl Zeiss 80mm f/2.8 Planar T",
  "120"
);
const result = cameraHTML(myCamera);
console.log(result);
