import React from 'react'
import './style.css'

function CurrentBalance({ transactions }) {
  let totalIncome = transactions
    .map((t) => +t.amount)
    .filter((t) => t > 0)
    .reduce((a, b) => {
      return a + b
    }, 0)

  let totalExpanse = transactions
    .map((t) => +t.amount)
    .filter((t) => t < 0)
    .reduce((a, b) => {
      return a + b
    }, 0)
  //   console.log(totalExpanse, 'tE')
  const Balance = totalIncome + totalExpanse // totalExpanse is in negative (-TE) or 10 - 5
  return (
    <>
      <div className='Currnent-Balance'>
        <h3 className='heading-3 upper'>CurrentBalance</h3>
        <span className='amount amount-top'>${Balance}</span>
      </div>
      <div className='balance-sum'>
        <div className='left'>
          <h5>Income</h5>
          <span>${totalIncome}</span>
        </div>
        <div className='right'>
          <h5>Expanse</h5>
          <span>${Math.abs(totalExpanse)}</span>
        </div>
      </div>
    </>
  )
}

export default CurrentBalance
