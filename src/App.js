import React, { useState, useReducer } from 'react'
import './App.css'
import Header from './component/Header.js'
import CurrentBalance from './component/CurrentBalance.js'
import Transactions from './component/Transactions.js'
import AddTransaction from './component/AddTransaction.js'

function App() {
  const [transactions, setTransactions] = useState([])

  return (
    <div className='container'>
      <Header />
      <CurrentBalance transactions={transactions} />
      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <AddTransaction
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </div>
  )
}

export default App
