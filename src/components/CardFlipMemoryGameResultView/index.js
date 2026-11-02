import './index.css'

const CardFlipMemoryGameResultView = props => {
  const {flips, resetGame} = props
  return (
    <div className="cf-result-card">
      <h1 className="cf-result-title">Congratulations!</h1>
      <p className="cf-result-stat">Completed in {flips} flips</p>
      <button type="button" className="cf-reset-btn" onClick={resetGame}>
        Play Again
      </button>
    </div>
  )
}
export default CardFlipMemoryGameResultView
