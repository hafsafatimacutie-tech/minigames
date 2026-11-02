import {Component} from 'react'
// eslint-disable-next-line import/no-unresolved
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import choicesList from '../../resources/choicesList'
import './index.css'

class RockPaperScissor extends Component {
  state = {
    score: 0,
    gameStage: 'PLAY',
    userChoice: '',
    opponentChoice: '',
    gameResult: '',
  }

  onSelectWeapon = id => {
    const opponentIndex = Math.floor(Math.random() * choicesList.length)
    const oppWeapon = choicesList[opponentIndex].id
    let outcome = 'IT IS DRAW'
    let scoreMod = 0

    if (id === 'ROCK') {
      if (oppWeapon === 'SCISSORS') {
        outcome = 'YOU WON'
        scoreMod = 1
      } else if (oppWeapon === 'PAPER') {
        outcome = 'YOU LOSE'
        scoreMod = -1
      }
    } else if (id === 'PAPER') {
      if (oppWeapon === 'ROCK') {
        outcome = 'YOU WON'
        scoreMod = 1
      } else if (oppWeapon === 'SCISSORS') {
        outcome = 'YOU LOSE'
        scoreMod = -1
      }
    } else if (id === 'SCISSORS') {
      if (oppWeapon === 'PAPER') {
        outcome = 'YOU WON'
        scoreMod = 1
      } else if (oppWeapon === 'ROCK') {
        outcome = 'YOU LOSE'
        scoreMod = -1
      }
    }

    this.setState(prevState => ({
      score: prevState.score + scoreMod,
      gameStage: 'RESULT',
      userChoice: id,
      opponentChoice: oppWeapon,
      gameResult: outcome,
    }))
  }

  restartGame = () =>
    this.setState({
      gameStage: 'PLAY',
      userChoice: '',
      opponentChoice: '',
      gameResult: '',
    })

  renderPlayStage = () => (
    <ul className="weapons-list">
      {choicesList.map(each => (
        <li key={each.id} className="weapon-item">
          <button
            data-testid={`${each.id.toLowerCase()}Button`}
            type="button"
            className="weapon-btn"
            onClick={() => this.onSelectWeapon(each.id)}
          >
            <img src={each.imageUrl} alt={each.id} className="weapon-img" />
          </button>
        </li>
      ))}
    </ul>
  )

  renderResultStage = () => {
    const {userChoice, opponentChoice, gameResult} = this.state
    const userImg = choicesList.find(e => e.id === userChoice).imageUrl
    const oppImg = choicesList.find(e => e.id === opponentChoice).imageUrl

    return (
      <div className="result-view-container">
        <div className="chosen-sides-container">
          <div className="side-card">
            <p className="side-title">YOU</p>
            <img src={userImg} alt="your choice" className="weapon-img" />
          </div>
          <div className="side-card">
            <p className="side-title">OPPONENT</p>
            <img src={oppImg} alt="opponent choice" className="weapon-img" />
          </div>
        </div>
        <p className="outcome-text">{gameResult}</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={this.restartGame}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  render() {
    const {score, gameStage} = this.state
    return (
      <div className="rps-bg-container">
        <div className="scoreboard-header">
          <h1 className="scoreboard-title">
            ROCK
            <br />
            PAPER
            <br />
            SCISSORS
          </h1>
          <div className="score-box">
            <p className="score-label">Score</p>
            <p className="score-value">{score}</p>
          </div>
        </div>
        <div className="game-interactive-zone">
          {gameStage === 'PLAY' ? this.renderPlayStage() : this.renderResultStage()}
        </div>
        <div className="rules-popup-align">
          <Popup
            modal
            trigger={
              <button type="button" className="rules-btn">
                Rules
              </button>
            }
          >
            {close => (
              <div className="popup-body">
                <button
                  type="button"
                  className="close-popup-btn"
                  onClick={close}
                >
                  <RiCloseLine size={24} />
                </button>
                <img
                  src="https://ccbp.in"
                  alt="rules"
                  className="rules-display-img"
                />
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}
export default RockPaperScissor
