import React from 'react';
import './Conversor.css';

export default function Conversor(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props
  return (

    <div className="conversor">
      <form className="conversor__Form">
        <input type="number" className="input" value={amount} onChange={onChangeAmount} />
        <select value={selectedCurrency} className="select-css" onChange={onChangeCurrency}>
          {currencyOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </form>
    </div>

  )
}