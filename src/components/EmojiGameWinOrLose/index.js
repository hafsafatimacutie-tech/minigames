import './index.css'

const EmojiGameWinOrLose = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? 'https://ccbp.in' : 'https://ccbp.in'
  const title = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="status-panel-container">
      <div className="text-feedback-side">
        <h1 className="status-heading">{title}</h1>
        <p className="status-lbl">{scoreLabel}</p>
        <p className="status-score-val">{score}/12</p>
        <button type="button" className="retry-btn" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="graphic-side">
        <img src={imgUrl} alt="win or lose" className="status-img" />
      </div>
    </div>
  )
}
export default EmojiGameWinOrLose
