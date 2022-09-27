const headerH = document.querySelector("h1");
const ultag = document.querySelector("ul");
const liEasy = document.querySelector("#easy");
const liMedium = document.querySelector("#medium");
const liDifficult = document.querySelector("#difficult");
const divTagResult = document.querySelector(".result");
const guessCountSpan = document.querySelector("span");
const h3Tag = document.querySelector("h3");
const inputTag = document.querySelector("#guess");
const bodyTag = document.body;
const formTag = document.forms.myForm;
const myTitle = ["guess", "my", "number!"];

//Header animation
const headerAnimation = (myHeader) => {
  let count = 0;
  setInterval(() => {
    if (count < myHeader.length) {
      headerH.innerHTML += " " + myHeader[count];
    }
    count++;
  }, 1000);
};

//Create logic of the game
const result = (num, guessCount = 5) => {
  let numberGened = Math.floor(Math.random() * num) + 1;

  formTag.addEventListener("submit", (e) => {
    e.preventDefault();
    if (
      Number(e.target.elements.guess.value) === numberGened &&
      guessCount === 5
    ) {
      divTagResult.innerText = "you guessed it!!!, on your first try!!!!";
    } else if (guessCount !== 0) {
      if (Number(e.target.elements.guess.value) > num) {
        guessCount = guessCount - 1;
        guessCountSpan.innerText = `${guessCount}`;
        e.target.elements.guess.value = num;
        confirm(`you are out of range`);
      } else if (Number(e.target.elements.guess.value) === numberGened) {
        guessCount = guessCount - 1;
        guessCountSpan.innerText = `${guessCount}`;
        divTagResult.innerText = "you guessed right";
        bodyTag.style.backgroundColor = "#8284f7bd";
      } else if (Number(e.target.elements.guess.value) > numberGened) {
        guessCount = guessCount - 1;
        guessCountSpan.innerText = `${guessCount}`;
        divTagResult.innerText = "you guessed high";
        bodyTag.style.backgroundColor = "yellow";
      } else if (Number(e.target.elements.guess.value) < numberGened) {
        guessCount = guessCount - 1;
        guessCountSpan.innerText = `${guessCount}`;
        divTagResult.innerText = "you guessed low";
        bodyTag.style.backgroundColor = "brown";
      }
    } else {
      divTagResult.innerText = "your out of guess";
    }
  });
};

//Choose difficulty animation function and add logic of the game
const difficultyChoise = () => {
  ultag.addEventListener("click", (e) => {
    if (e.target.innerText === "Easy") {
      liEasy.innerText = "range : 0-15";
      liEasy.style.fontSize = "40px";
      liEasy.style.textShadow = "1px 1px 4px white";
      liMedium.style.display = "none";
      liDifficult.style.display = "none";
      result(15);
    } else if (e.target.innerText === "Medium") {
      liMedium.innerText = "range : 0-20";
      liMedium.style.fontSize = "40px";
      liMedium.style.textShadow = "1px 1px 4px white";
      liEasy.style.display = "none";
      liDifficult.style.display = "none";
      result(20);
    } else if (e.target.innerText === "Hard") {
      liDifficult.innerText = "range : 0-30";
      liDifficult.style.fontSize = "40px";
      liDifficult.style.textShadow = "1px 1px 4px white";
      liEasy.style.display = "none";
      liMedium.style.display = "none";
      result(30);
    }
  });
};

//Create reset function
const resetButton = (tag, level) => {
  h3Tag.addEventListener("click", () => {
    tag.style.display = "block";
    tag.style.textShadow = "";
    tag.style.fontSize = "20px";
    tag.innerText = level;
    guessCountSpan.innerText = 5;
    bodyTag.style.backgroundColor = "rgb(15, 2, 48)";
    inputTag.value = "";
  });
};

resetButton(liEasy, "Easy");
resetButton(liMedium, "Medium");
resetButton(liDifficult, "Hard");
headerAnimation(myTitle);
difficultyChoise();
