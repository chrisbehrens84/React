import React from 'react'

function Table(props) {
  
  return (
    
    <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
    {props.yearlyData.map(data => (
    
      
      <tr key ={data.year}>
        <td>{data.year}</td>
        <td>{data.savingsEndOfYear}</td>
        <td>{data.yearlyInterest}</td>
        <td>{data.savingsEndOfYear - 
             props.initialInvestment - data.yearlyContribution * data.year}</td>
        <td>{props.initialInvestment + data.yearlyContribution * data.year}</td>
      </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table;