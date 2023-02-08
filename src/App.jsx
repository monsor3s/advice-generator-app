import ImgButton from "../src/assets/icon-dice.svg"
import DivisionDesk from "../src/assets/pattern-divider-desktop.svg"

import "../src/styles/components/app.sass"
import "../src/styles/reset.sass"
import "../src/scripts/index.js"

function App() {
  return (
    <section className="container">
      <div className="main-box">
        <div className="main-card">
          <p id="advice-id"></p>
          <div id="advice-text"></div>
          <img className="main-division" src={DivisionDesk} alt="Division Desktop" />
        </div>
        <button className="main-button">
          <img src={ImgButton} alt="Logo Button" />
        </button>
      </div>
    </section>
  )
}

export default App
