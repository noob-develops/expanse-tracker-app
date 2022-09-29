import React, { useState } from 'react'

import './style.css'

function AddTransaction({ transactions, setTransactions }) {
  const [transaction, setTransaction] = useState({})

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setTransaction({ ...transaction, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (transaction.description && transaction.amount) {
      const newTrans = { ...transaction, id: new Date().getTime().toString() }
      console.log('new Trans', newTrans)
      setTransactions([...transactions, newTrans])
    } else {
      console.log('enter some values')
    }

    setTransaction({ ...transaction, description: '', amount: '' })
  }

  const { description: text, amount } = transaction

  return (
    <div className='add-transaction'>
      <h3 className='heading-3'>Add New Transaction</h3>
      <hr className='hr' />
      <form onSubmit={handleSubmit}>
        <label htmlFor='Description'>Description</label>
        <input
          type='text'
          id='Description'
          name='description'
          value={text}
          onChange={handleChange}
        />

        <label htmlFor='T-amount'>Transaction Amount</label>
        <input
          type='number'
          id='T-amount'
          name='amount'
          value={amount}
          onChange={handleChange}
        />
        <button className='btn btn-add-transaction' type='submit'>
          Add New Transaction
        </button>
      </form>
    </div>
  )
}

export default AddTransaction
