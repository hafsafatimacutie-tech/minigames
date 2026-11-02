import {Component} from 'react'
import MemoryMatrixRulesView from '../MemoryMatrixRulesView'
import MemoryMatrixResultView from '../MemoryMatrixResultView'
import './index.css'

class MemoryMatrix extends Component {
  state = {
    level: 1,
    gridDimension: 3,
    targetCells: [],
    clickedCells: [],
    stage: 'RULES',
    displayHighlight: false,
  }

  generateTargets = dimension => {
    const totalCells = dimension * dimension
    const targetCount = dimension
    const targets = []
    while (targets.length < targetCount) {
      const rand = Math.floor(Math.random() * totalCells)
      if (!targets.includes(rand)) {
        targets.push(rand)
      }
    }
    this.setState(
      {targetCells: targets, clickedCells: [], displayHighlight: true},
      () => {
        setTimeout(() => this.setState({displayHighlight: false}), 2000)
      },
    )
  }

  startGame = () => {
    const {gridDimension} = this.state
    this.setState({stage: 'PLAY'}, () => {
      this.generateTargets(gridDimension)
    })
  }

  resetGame = () => {
    this.setState({level: 1, gridDimension: 3, stage: 'PLAY'}, () => {
      this.generateTargets(3)
    })
  }

  cellClick = index => {
    const {targetCells, clickedCells, level, gridDimension} = this.state
    if (!targetCells.includes(index)) {
      this.setState({stage: 'RESULT'})
      return
    }
    if (clickedCells.includes(index)) return
    const updatedClicks = [...clickedCells, index]
    this.setState({clickedCells: updatedClicks}, () => {
      if (updatedClicks.length === targetCells.length) {
        const nextLevel = level + 1
        const nextDimension =
          nextLevel % 2 === 1 ? gridDimension + 1 : gridDimension
        this.setState({level: nextLevel, gridDimension: nextDimension}, () => {
          this.generateTargets(nextDimension)
        })
      }
    })
  }

  render() {
    const {
      level,
      gridDimension,
      targetCells,
      clickedCells,
      stage,
      displayHighlight,
    } = this.state

    if (stage === 'RULES') {
      return <MemoryMatrixRulesView startGame={this.startGame} />
    }
    if (stage === 'RESULT') {
      return <MemoryMatrixResultView level={level} resetGame={this.resetGame} />
    }

    const totalCells = gridDimension * gridDimension
    const cellsArray = Array.from(Array(totalCells).keys())

    return (
      <div className="matrix-bg">
        <h1 className="matrix-heading">Memory Matrix (Level {level})</h1>
        <div
          className="matrix-grid-box"
          style={{gridTemplateColumns: `repeat(${gridDimension}, 1fr)`}}
        >
          {cellsArray.map(idx => {
            let cellStyle = 'matrix-cell'
            if (displayHighlight && targetCells.includes(idx)) {
              cellStyle += ' highlighted'
            }
            if (!displayHighlight && clickedCells.includes(idx)) {
              cellStyle += ' active'
            }
            return (
              <button
                key={idx}
                type="button"
                className={cellStyle}
                onClick={() => !displayHighlight && this.cellClick(idx)}
                disabled={displayHighlight}
                aria-label={`Cell ${idx}`}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default MemoryMatrix
