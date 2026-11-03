import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div className="home-bg-container">
        <h1 className="home-title">Games</h1>
        <ul className="games-menu-list">
          <li className="game-card">
            <Link className="game-link" to="/emoji-game">
              <img
                className="game-icon"
                src="https://res.cloudinary.com/dzbvm25qt/image/upload/v1743132066/Asset_1_4x_1_shu34u.png"
                alt="emoji game"
              />
              <p className="game-lbl">Emoji Game</p>
            </Link>
          </li>
          <li className="game-card">
            <Link className="game-link" to="/rpc">
              <img
                className="game-icon"
                src="https://res.cloudinary.com/dzbvm25qt/image/upload/v1743132592/Group_7469_pvelaw.png"
                alt="rock paper scissor"
              />
              <p className="game-lbl">Rock Paper Scissors</p>
            </Link>
          </li>
          <li className="game-card">
            <Link className="game-link" to="/memory-matrix">
              <img
                className="game-icon"
                src="https://res.cloudinary.com/dzbvm25qt/image/upload/v1743132526/memory_mshrxo.png"
                alt="memory matrix"
              />
              <p className="game-lbl">Memory Matrix</p>
            </Link>
          </li>
          <li className="game-card">
            <Link className="game-link" to="/card-flip-memory-game">
              <img
                className="game-icon"
                src="https://res.cloudinary.com/dzbvm25qt/image/upload/v1743132658/animals_sjwjud.png"
                alt="card flip memory game"
              />
              <p className="game-lbl">Card Flip Memory Game</p>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
export default Home
