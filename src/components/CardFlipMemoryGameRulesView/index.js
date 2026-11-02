import './index.css'

const CardFlipMemoryGameRulesView = props => {
  const {startGame} = props
  return (
    <div className="cf-rules-bg">
      <div className="cf-rules-card">
        <h1 className="cf-rules-title">Card Flip Rules</h1>
        <ul className="cf-rules-list">
          <li>Flip target elements open sequentially.</li>
          <li>Find matched sets back to back safely.</li>
          <li>Clear layouts within minimal trial timelines.</li>
        </ul>
        <button type="button" className="cf-start-btn" onClick={startGame}>
          Start
        </button>
      </div>
    </div>
  )
}
export default CardFlipMemoryGameRulesView
