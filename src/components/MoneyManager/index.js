import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    balance: 0,
    income: 0,
    expense: 0,
    title: '',
    amount: 0,
    transactionType: 'INCOME',
    historyList: [],
  }

  onChangeInputTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeInputAmount = event => {
    this.setState({amount: Number(event.target.value)})
  }

  onSelectInput = event => {
    this.setState({transactionType: event.target.value})
  }

  onAddTransactionItem = () => {
    const {title, amount, transactionType} = this.state
    if (title !== '' && amount !== '') {
      const historyItem = {
        id: uuidv4(),
        title,
        amount,
        transactionType,
      }
      this.setState(prevState => ({
        title: '',
        amount: '',
        transactionType: 'INCOME',
        historyList: [...prevState.historyList, historyItem],
      }))

      if (transactionType === 'INCOME') {
        this.setState(prevState => ({income: prevState.income + amount}))
      }
      if (transactionType === 'EXPENSES') {
        this.setState(prevState => ({expense: prevState.expense + amount}))
      }
      this.setState(prevState => ({
        balance: prevState.income - prevState.expense,
      }))
    }
  }

  deleteHistoryItem = (id, amount, transactionType) => {
    if (transactionType === 'INCOME') {
      this.setState(prevState => ({
        balance: prevState.balance - amount,
        income: prevState.income - amount,
        historyList: prevState.historyList.filter(
          eachHistory => eachHistory.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + amount,
        expense: prevState.expense - amount,
        historyList: prevState.historyList.filter(
          eachHistory => eachHistory.id !== id,
        ),
      }))
    }
  }

  render() {
    const {balance, income, expense} = this.state
    const {title, amount, transactionType, historyList} = this.state
    return (
      <div className="app-container">
        <div className="MoneyManager-container">
          <div className="banner-container">
            <p className="banner-heading">Hi, Hemendra</p>
            <p className="banner-description">
              Welcome back to your{' '}
              <span className="banner-span-text">Money Manager</span>
            </p>
          </div>
          <div className="money-details-containers">
            <MoneyDetails balance={balance} income={income} expense={expense} />
          </div>

          <div className="transactionItemsContainer">
            <div className="add-transaction-container">
              <h1 className="add-transaction-heading">Add Transaction</h1>
              <label htmlFor="inputTitle" className="inputTitle">
                TITLE
              </label>
              <input
                type="text"
                id="inputTitle"
                className="inputElement"
                placeholder="TITLE"
                onChange={this.onChangeInputTitle}
                value={title}
              />
              <label htmlFor="inputAmount" className="inputTitle">
                AMOUNT
              </label>
              <input
                type="text"
                id="inputAmount"
                className="inputElement"
                placeholder="AMOUNT"
                onChange={this.onChangeInputAmount}
                value={amount}
              />
              <label htmlFor="inputIncomeType" className="inputTitle">
                TYPE
              </label>
              <select
                className="selectElement"
                onChange={this.onSelectInput}
                value={transactionType}
              >
                {transactionTypeOptions.map(eachTransactionType => (
                  <option value={eachTransactionType.optionId}>
                    {eachTransactionType.displayText}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="add-transaction-btn"
                onClick={this.onAddTransactionItem}
              >
                Add
              </button>
            </div>
            <div className="transaction-history-container">
              <h1 className="historyContainerHeading">History</h1>
              <div className="historyCategoryContainer">
                <p className="historyCategory">Title</p>
                <p className="historyCategory">Amount</p>
                <p className="historyCategory">Type</p>
              </div>
              <ul className="history-items-container">
                {historyList.map(eachHistory => (
                  <TransactionItem
                    details={eachHistory}
                    deleteHistoryItem={this.deleteHistoryItem}
                    key={eachHistory.id}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
