var animals = ["dog", "fish", "cat", "shark", "cat", "dog"];
var displayEle = document.body.querySelector(".display");
var messageEle = document.createElement("div");

function createList(messageEle) {
  for (var i = 0; i < animals.length; i++) {
    var messageEle = document.createElement("div");
    if (animals[i] == "dog") {
      messageEle.innerHTML += "borf borf";
    } else if (animals[i] == "cat") {
      messageEle.innerHTML += "I am a cat.";
    } else {
      messageEle.innerHTML += "I am an animal.";
    }
    displayEle.appendChild(messageEle);
  }
}
createList(messageEle);

function randomize(messageEle) {
  messageEle.sort(() => Math.random() - 0.5);
  return messageEle;
}

document.body
  .querySelector(".randomizer")
  .addEventListener("click", function () {
    displayEle.innerHTML = "";
    randomize(animals);
    createList(animals);
  });