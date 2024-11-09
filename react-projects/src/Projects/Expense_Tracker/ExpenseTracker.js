import React from 'react'
import Header from './Components/Header'
import style from './ExpenseTracker.module.css'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

function ExpenseTracker() {
  return (
    <div className={style.ExpenseTracker}>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
    </div>
  )
}

export default ExpenseTracker
