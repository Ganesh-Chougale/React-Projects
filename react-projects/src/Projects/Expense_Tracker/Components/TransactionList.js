import React from 'react'
import style from "./CSS/TransactionList.module.css"

function TransactionList() {
  return (
    <div className={style.TransactionList}>
      <h5 >Transaction History</h5>
      <hr className={style.tlhr}/>
      <ul id='i_list' className='c_listc'>
        <li className='minus'>
        <span
        style={{width: "60%"}}
        >cash</span>
        <span
        style={{width: "30%"}}
        >400</span>
          <button className={style.deletButton}>X</button> 
        </li>
      </ul>
    </div>
  )
}

export default TransactionList
