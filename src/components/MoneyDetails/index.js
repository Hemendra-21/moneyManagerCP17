import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props

  return (
    <>
      <div className="balance-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="moneyDetailsImg"
        />
        <div>
          <p className="detail-text">Your Balance</p>
          <p className="balance-text" data-testid="balanceAmount">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="moneyDetailsImg"
        />
        <div>
          <p className="detail-text">Your Income</p>
          <p className="balance-text" data-testid="incomeAmount">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expense-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="moneyDetailsImg"
        />
        <div>
          <p className="detail-text">Your Expenses</p>
          <p className="balance-text" data-testid="expensesAmount">
            Rs {expense}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
