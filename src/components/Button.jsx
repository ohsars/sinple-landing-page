import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none outline-0 ${styles} hover:animate-bounce rounded-[10px]`}>Get Started</button>
  )
}

export default Button