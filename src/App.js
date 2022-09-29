import React, { useState, useReducer } from 'react'
import './App.css'
import Header from './component/Header'
import CurrentBalance from './component/CurrentBalance'
import Transactions from './component/Transactions'
import AddTransaction from './component/AddTransaction'

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
