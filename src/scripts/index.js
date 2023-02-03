const resDiv = document.querySelector("#advice-text")
const resBtn = document.querySelector(".main-button");

resBtn.addEventListener('click', () => {
  getAdvice();
})

window.onload = () => {
  getAdvice();
}

function getAdvice() {
  fetch('https://api.adviceslip.com/advice').then(response => 
  {
    return response.json();
  }).then(adviceData => {
    const Adviceobj = adviceData.slip;
    resDiv.innerHTML = `${Adviceobj.advice}`;
  }).catch(error => {
    console.log(error);
  });
}

