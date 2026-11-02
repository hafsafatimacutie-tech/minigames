import {Component} from 'react'
import EmojiGameNavbar from '../EmojiGameNavbar'
import EmojiCard from '../EmojiCard'
import EmojiGameWinOrLose from '../EmojiGameWinOrLose'
import EmojiGameRulesView from '../EmojiGameRulesView'
import emojisList from '../../resources/emojisList'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    topScore: 0,
    isGameInProgress: true,
    showRules: true,
  }

  startTheGame = () => {
    this.setState({showRules: false})
  }

  resetGame = () =>
    this.setState({clickedEmojisList: [], isGameInProgress: true})

  clickEmoji = id => {
    const {clickedEmojisList, topScore} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.setState({isGameInProgress: false})
    } else if (emojisList.length - 1 === clickedEmojisLength) {
      this.setState({
        topScore: 12,
        isGameInProgress: false,
        clickedEmojisList: [...clickedEmojisList, id],
      })
    } else {
      const nextScore = clickedEmojisLength + 1
      this.setState({
        clickedEmojisList: [...clickedEmojisList, id],
        topScore: nextScore > topScore ? nextScore : topScore,
      })
    }
  }

  getShuffledEmojisList = () => [...emojisList].sort(() => Math.random() - 0.5)

  render() {
    const {
      clickedEmojisList,
      topScore,
      isGameInProgress,
      showRules,
    } = this.state

    if (showRules) {
      return <EmojiGameRulesView startTheGame={this.startTheGame} />
    }

    const shuffledEmojisList = this.getShuffledEmojisList()
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <div className="emoji-game-bg">
        <EmojiGameNavbar
          currentScore={clickedEmojisList.length}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        <div className="emoji-content-body">
          {isGameInProgress ? (
            <ul className="emojis-grid-view">
              {shuffledEmojisList.map(each => (
                <EmojiCard
                  key={each.id}
                  emojiDetails={each}
                  clickEmoji={this.clickEmoji}
                />
              ))}
            </ul>
          ) : (
            <EmojiGameWinOrLose
              isWon={isWon}
              score={clickedEmojisList.length}
              onClickPlayAgain={this.resetGame}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
