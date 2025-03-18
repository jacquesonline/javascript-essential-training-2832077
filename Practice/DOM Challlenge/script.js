// JavaScript code​​​​​​‌‌​​‌‌‌​​‌‌‌​‌​​‌‌​​‌‌​‌‌ below
// Change these values to control whether you see
// the expected answer and/or hints.

// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

function createNavMenu(document) {
  //Add the list items into an unordered list
  // Add the unordered list into a <nav> container
  // Give the <nav> container the class .main-navigation
  // Append the new <nav> container to the existing element with the class .siteheader
  const nav = document.createElement("nav");
  nav.classList.add("main-navigation");
  const navList = document.createElement("ul");
  navList.innerHTML = navContent;
  nav.append(navList);
  document.querySelector(".siteheader").appendChild(nav);
}

createNavMenu(document);
