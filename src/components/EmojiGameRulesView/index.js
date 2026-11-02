import './index.css'

const EmojiGameRulesView = props => {
  const {startTheGame} = props
  return (
    <div className="rules-overlay-bg">
      <div className="rules-card-box">
        <h1 className="rules-main-title">Emoji Game Rules</h1>
        <ul className="rules-bullet-list">
          <li>Click an emoji to start the processing loop.</li>
          <li>The layout order shuffles with every click.</li>
          <li>Do not select the same graphic twice.</li>
          <li>Hit all 12 unique items to secure the win.</li>
        </ul>
        <button
          type="button"
          className="start-game-trigger"
          onClick={startTheGame}
        >
          Start Playing
        </button>
      </div>
    </div>
  )
}
export default EmojiGameRulesView
