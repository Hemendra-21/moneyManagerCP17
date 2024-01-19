// Write your code here
import './index.css'

const TransactionItem = props => {
  const {details, deleteHistoryItem} = props
  const {id, title, amount, transactionType} = details
  const onDeleteHistoryItem = () => {
    deleteHistoryItem(id, amount, transactionType)
  }
  return (
    <li className="history-container">
      <p className="history-item">{title}</p>
      <p className="history-item">{amount}</p>
      <p className="history-item">{transactionType}</p>
      <button
        type="button"
        className="delete-btn"
        onClick={onDeleteHistoryItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default TransactionItem
