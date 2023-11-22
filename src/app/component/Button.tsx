import React from 'react'

const Button = ({content}) => {
  return (
    <div>	<button className="bg-[#5b21b6] hover:bg-[#3b0764] text-white font-semibold py-2 px-4 rounded-3xl focus:outline-none shadow-md transition duration-300 ease-in-out">
   {content}
</button></div>
  )
}

export default Button