import React, { useState } from 'react'
import style from "./CSS/AddTransaction.module.css"
function AddTransaction() {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  
  return (
    <div className={style.AddTransaction}>
      <h3>Add new transaction</h3>
      <form action="" id='form' className={style.form}>
        <div className={style.formCotrol}>
            <label className={style.labels} htmlFor="text" value={text}>Text</label>
            <input className={style.inputs} type="text" id="text" placeholder="Enter text here...."
              onClick={(e)=>setText(e.target.value)}
            />
        </div>
        <div className={style.formCotrol}>
        <label className={style.labels} htmlFor="amount" value={amount}>Amount</label>
        <input className={style.inputs} type="number" id="amount" placeholder="Enter mount here...." 
          onClick={(e)=>setAmount(e.target.value)}
        />
        </div>
        <button className={style.atBtn}>Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
