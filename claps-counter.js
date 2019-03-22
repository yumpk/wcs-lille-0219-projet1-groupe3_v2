document.body.onload = () => {
  const rootElement = document.getElementsByClassName('clap-button-box');

  for (let i = 0; i < rootElement.length; i++) {
    // Create button
    const newButton = document.createElement("button");
    newButton.classList.add("claps-button");
    newButton.addEventListener('click', () => {
      clickEvents();
    })

    // Insert clap icon in button
    const clapsIcon = document.createElement("img");
    clapsIcon.src = "https://img.icons8.com/ios/60/000000/applause.png";
    newButton.append(clapsIcon);

    // Append button to elements with class name 'clap-button-box'
    const eachClapButton = rootElement[i];
    eachClapButton.append(newButton);

    // Create counter indication
    const clapsCounter = document.createElement("div");
    clapsCounter.id = 'clicks';
    newButton.append(clapsCounter);
    clapsCounter.classList.add("number");
    clapsCounter.innerHTML = clicks;
  }
}

// Create counter incrementation
let clicks = Math.floor(Math.random() * 10000);

const addClaps = () => {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  let element = document.getElementById("clicks");
  element.classList.add("animation");
};

// Clap sound event
const myPlay = () => {
  let audio = new Audio("clap.mp3");
  audio.play();
}

// Helper function
const clickEvents = () => {
  addClaps();
  myPlay();
}
