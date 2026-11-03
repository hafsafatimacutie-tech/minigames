import './index.css'

const EmojiGameNavbar = props => {
  const {currentScore, topScore, isGameInProgress} = props
  return (
    <nav className="emoji-nav-bar">
      <div className="nav-branding">
        <img src="https://res.cloudinary.com/dzbvm25qt/image/upload/v1743179615/wink_1_uzkb5v.png" alt="emoji logo" className="nav-logo" />
        <h1 className="nav-title">Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="scores-display-zone">
          <p className="score-metric">Score: {currentScore}</p>
          <p className="score-metric">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}
export default EmojiGameNavbar
