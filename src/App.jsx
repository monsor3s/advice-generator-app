import ImgButton from "../src/assets/icon-dice.svg"
import DivisionDesk from "../src/assets/pattern-divider-desktop.svg"

import "../src/styles/components/app.sass"
import "../src/styles/reset.sass"

function App() {
  return (
    <section className="container">
      <div className="main-box">
        <img className="main-division" src={DivisionDesk} alt="Division Desktop" />
        <div className="main-button">
          <img src={ImgButton} alt="Logo Button" />
        </div>
      </div>
    </section>
  )
}

export default App
