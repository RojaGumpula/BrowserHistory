import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDeleteHistory} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteItem = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="time-and-text-container">
        <p className="time-text">{timeAccessed}</p>

        <div className="image-and-text-container">
          <img src={logoUrl} className="image-style" alt="domain logo" />

          <div className="title-and-domain-container">
            <p className="title-text">{title}</p>
            <p className="domain-text">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="delete-container">
        <button
          type="button"
          data-testid="delete"
          className="button"
          onClick={onDeleteItem}
        >
          <img
            className="delete-image"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
