function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: [
      "Vois-tu, je sais que tu m’attends. J’irai par la forêt, j’irai par la montagne",
    ],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
