import React from 'react'

function box({value,pass,num}) {



  return (
    <div onClick={()=> pass(num)} className='box' >{value}</div>
  )
}

export default box