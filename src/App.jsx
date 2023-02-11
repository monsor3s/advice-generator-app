import ImgButton from "../src/assets/icon-dice.svg"
import DivisionDesk from "../src/assets/pattern-divider-desktop.svg"
import { useEffect, useState } from "react"

import "../src/styles/components/app.sass"
import "../src/styles/reset.sass"
import "../src/scripts/index.js"

function App() {
  const [text, setText] = useState([])

  const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  } 

  useEffect(() => {
    fetchAdvice()
  }, [], {once: true})

  return (
    <section className="container">
      <div className="main-box">
        <div className="main-card">
          <p id="advice-id">Advice #{text.id}</p>
          <div id="advice-text">"{text.advice}"</div>
          <img className="main-division" src={DivisionDesk} alt="Division Desktop" />
        </div>
        <button className="main-button" onClick={fetchAdvice}>
          <img src={ImgButton} alt="Logo Button" />
        </button>
      </div>
    </section>
  )
}

export default App
