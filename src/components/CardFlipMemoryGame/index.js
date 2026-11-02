import {Component} from 'react'
import CardFlipMemoryGameRulesView from '../CardFlipMemoryGameRulesView'
import CardFlipMemoryGameResultView from '../CardFlipMemoryGameResultView'
import cardsData from '../../resources/cardsData'
import './index.css'

class CardFlipMemoryGame extends Component {
  state = {
    cards: [],
    flippedIndices: [],
    matchedPairs: [],
    flipsCount: 0,
    stage: 'RULES',
  }

  generateDeck = () => {
    const deck = [...cardsData, ...cardsData]
      .map((card, idx) => ({...card, uniqueId: idx}))
      .sort(() => Math.random() - 0.5)
    this.setState({
      cards: deck,
      flippedIndices: [],
      matchedPairs: [],
      flipsCount: 0,
    })
  }

  startGame = () => this.setState({stage: 'PLAY'}, this.generateDeck)

  resetGame = () => this.setState({stage: 'PLAY'}, this.generateDeck)

  cardClick = idx => {
    const {flippedIndices, matchedPairs, flipsCount, cards} = this.state
    if (
      flippedIndices.length === 2 ||
      flippedIndices.includes(idx) ||
      matchedPairs.includes(cards[idx].id)
    )
      return

    const nextFlips = [...flippedIndices, idx]
    this.setState(
      {flippedIndices: nextFlips, flipsCount: flipsCount + 1},
      () => {
        if (nextFlips.length === 2) {
          const [first, second] = nextFlips
          if (cards[first].id === cards[second].id) {
            const updatedPairs = [...matchedPairs, cards[first].id]
            this.setState(
              {matchedPairs: updatedPairs, flippedIndices: []},
              () => {
                if (updatedPairs.length === cardsData.length) {
                  setTimeout(() => this.setState({stage: 'RESULT'}), 600)
                }
              },
            )
          } else {
            setTimeout(() => this.setState({flippedIndices: []}), 1000)
          }
        }
      },
    )
  }

  render() {
    const {cards, flippedIndices, matchedPairs, flipsCount, stage} = this.state
    if (stage === 'RULES')
      return <CardFlipMemoryGameRulesView startGame={this.startGame} />
    if (stage === 'RESULT')
      return (
        <CardFlipMemoryGameResultView
          flips={flipsCount}
          resetGame={this.resetGame}
        />
      )

    return (
      <div className="cf-game-bg">
        <div className="cf-stats-header">
          <h1 className="cf-game-title">Card Flip Match</h1>
          <p className="cf-counter-lbl">Flips: {flipsCount}</p>
        </div>
        <ul className="cf-grid-layout">
          {cards.map((card, index) => {
            const isFlipped =
              flippedIndices.includes(index) || matchedPairs.includes(card.id)
            return (
              <li key={card.uniqueId} className="cf-grid-item">
                <button
                  type="button"
                  className={`cf-card-element ${isFlipped ? 'flipped' : ''}`}
                  onClick={() => this.cardClick(index)}
                >
                  {isFlipped ? (
                    <img
                      src={card.imageUrl}
                      alt={card.name}
                      className="cf-card-image"
                    />
                  ) : (
                    <div className="cf-card-back">?</div>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
export default CardFlipMemoryGame
