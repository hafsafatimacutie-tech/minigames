import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  return (
    <li className="emoji-item">
      <button
        type="button"
        className="emoji-btn"
        onClick={() => clickEmoji(id)}
      >
        <img src={emojiUrl} alt={emojiName} className="emoji-graphic" />
      </button>
    </li>
  )
}
export default EmojiCard
