import React from 'react'
import './style.css'

function Transactions({ transactions, setTransactions }) {
    const removeItem = (id) => {
        setTransactions((oldTrans) => {
            return oldTrans.filter(t => t.id !== id)
        })
    }

    return (
        <div className="trasnactions">
            <h3 className="heading-3">Transaction History</h3>
            <hr className="hr"></hr>
            <ul className="trans-ul">
                {
                    transactions.map((t) => {
                        return (
                            <li className={`item ${t.amount > 0 ? 'income' : 'expanse'}`} key={t.description}>
                                <span className="remove-btn" onClick={() => removeItem(t.id)}>X</span>
                                <span className="title">{t.description}</span>
                                <span className="amount">{
                                    `$${t.amount}`
                                }</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Transactions
