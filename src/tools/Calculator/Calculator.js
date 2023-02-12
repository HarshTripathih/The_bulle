import React from 'react'

function Calculator() {
  return (
    <div>
    <h1>Welcome To Mutual Fund SIP Calculator</h1>
    <div className="amount">
<label htmlFor="investAmount">I wish to invest per month</label>
<input type="text" />
</div>
<div className="years"> 
<label htmlFor="investYears">No. of years</label>
<input type="text" />
</div>
<div className="returnn"> 
<label htmlFor="investReturn">Expected Rate of Return</label>
<input type="text" />
</div>

<div className='Results'>
<ul>
  <li>
<span>Invested Amount</span>
<strong>$</strong>
<span></span>
  </li>
  <li>
    <span>Resultant Amount</span>
    <strong>$</strong>
<span></span>
    </li>
</ul>

</div>





</div>
    
    
  )
}

export default Calculator