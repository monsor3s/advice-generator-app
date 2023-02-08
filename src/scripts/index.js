const resDiv = document.querySelector("#advice-text");
const resId = document.querySelector("#advice-id");
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
    resId.innerHTML = `advice #${Adviceobj.id}`;
    resDiv.innerHTML = `${Adviceobj.advice}`;
  }).catch(error => {
    console.log(error);
  });
}

