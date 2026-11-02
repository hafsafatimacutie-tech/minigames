import './index.css'

const MemoryMatrixResultView = props => {
  const {level, resetGame} = props
  return (
    <div className="matrix-result-container">
      <h1 className="matrix-result-title">Game Over!</h1>
      <p className="matrix-result-score">You reached Level {level}</p>
      <button
        type="button"
        className="matrix-reset-btn"
        onClick={resetGame}
      >
        Try Again
      </button>
    </div>
  )
}
export default MemoryMatrixResultView
