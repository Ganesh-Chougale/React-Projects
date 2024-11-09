import React from 'react'
import style from "./CSS/IncomeExpense.module.css"

function IncomeExpense() {
  return (
    <div className={style.IncomeExpenseMain}>

      <div className={style.divs}>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'
        style={{color:"green", fontWeight: "bolder"}}
        >+ 0.00</p>
      </div>

      <div className={style.divs}>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'
        style={{color:"red", fontWeight: "bolder"}}
        >- 0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpense
