import './index.css'

const MemoryMatrixRulesView = props => {
  const {startGame} = props
  return (
    <div className="matrix-rules-bg">
      <div className="matrix-rules-card">
        <h1 className="matrix-rules-title">Memory Matrix Rules</h1>
        <ul className="matrix-rules-list">
          <li>The grid sizes grow dynamically scale up as you level.</li>
          <li>Remember highlighting nodes within processing timelines.</li>
          <li>Click target cell grids safely without checking missed units.</li>
        </ul>
        <button type="button" className="matrix-start-btn" onClick={startGame}>
          Start Game
        </button>
      </div>
    </div>
  )
}
export default MemoryMatrixRulesView
