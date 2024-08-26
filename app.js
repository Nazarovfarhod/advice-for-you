const button = document.querySelector("button");

const getData = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((data) => data.json())
    .then((req) => {
      document.querySelector("h4").textContent = `ADVICE  #${req.slip.id}`;
      document.querySelector("p").textContent = `${req.slip.advice}`;
    })
    .catch((err) => console.log(err.message));
};

button.addEventListener("click", () => {
  getData();
});
