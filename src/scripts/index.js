const url = "https://api.adviceslip.com/advice";
var id=0;
var string='';

async function dice() {
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    id=data.slip.id;
    string=data.slip.advice;
    document.querySelector(".main-box>#advice-id").textContent=`Advice #${id}`;
    document.querySelector(".main-box>#advice-text").textContent=string;
  })
  document.querySelector(".main-button").addEventListener("click", dice());
}

dice();