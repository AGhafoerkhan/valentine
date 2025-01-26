const button = document.getElementById("confettiButton");
const replaceText = document.getElementById("replaceText");
const box = document.getElementById("box");
const increaseButton = document.getElementById("increaseButton");
const buttonHidefirst = document.querySelector(".button-hide-first");
const buttonHidesecond = document.querySelector(".button-hide-second");
let messageIndex = 0;
const messages = [
  "Please be my Valentine!",
  "AToooooooooooooooooooo 🥺🥺🥺🥺  ",
  "Will you be my Valentine?",
  "Pretty please? 💖",
  "Valentine? Please?",
  "Be mine, pretty please! 💕",
  "My heart is yours, pretty please!",
  "Valentine, will you? 💝",
  "Please say yes, Valentine! 😊",
  "I'm totally in love with you, please! 💖",
];

function increaseFontSizeBy100px() {
  txt = document.querySelector(".increase-font");
  style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize + 75 + "px";
}

button.addEventListener("click", function () {
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
    };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    const particleCount = 50 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount: 10,
        scalar: 2,
        origin: { x: 0.5, y: Math.random() * 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount: 10,
        scalar: 3,
        origin: { x: 0.5, y: Math.random() * 0.2 },
      })
    );

    // randomly added
    confetti(
      Object.assign({}, defaults, {
        particleCount: 10,
        scalar: 4,
        origin: { x: 0.75, y: Math.random() * 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount: 10,
        scalar: 5,
        origin: { x: 0.25, y: Math.random() * 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount: 10,
        scalar: 6,
        origin: { x: 0.5, y: Math.random() * 0.9 },
      })
    );
  }, 500);
});

// Wait until the DOM is fully loaded before attaching the click event
document.addEventListener("DOMContentLoaded", function () {
  const messageElement = document.getElementById("message");

  if (messageElement) {
    messageElement.addEventListener("click", function () {
      if (messageIndex < messages.length - 1) {
        messageIndex = messageIndex + 1;
        messageElement.textContent = messages[messageIndex];
      } else {
        // Remove the button after the last message
        messageElement.remove();
      }
    });
  } else {
    console.error("Message element not found.");
  }
});

const hiddenImage = document.querySelector(".hidden-image");

button.addEventListener("click", () => {
  replaceText.textContent =
    "You dont have a choice.Yipppppppeeeeeeeey party party party!!!!!! magico magico";
  buttonHidesecond.classList.add("hidden");
  hiddenImage.classList.remove("hidden");
  button.remove();
  increaseButton.remove();
});

increaseButton.addEventListener("click", () => {
  // Get the current size of the box
  const currentWidth = box.offsetWidth;
  const currentHeight = box.offsetHeight;
  let currentSize = window
    .getComputedStyle(box, null)
    .getPropertyValue("font-size");
  let newSize = parseInt(currentSize) + 50; // Increase by 50px
  box.style.fontSize = newSize + "px";
  // Increase the size by 10px
  box.style.width = currentWidth + 100 + "px";
  box.style.height = currentHeight + 100 + "px";
  buttonHidefirst.classList.add("hidden");
  buttonHidesecond.classList.add("hidden");
});
