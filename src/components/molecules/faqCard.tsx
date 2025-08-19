import React from 'react'
import Button from '../atoms/button'

function FAQCard() {
  return (
    <div className="flex flex-col xl:max-w-[400px] justify-start items-start gap-5 text-white px-[25px] py-[35px] border-1 border-[#262626] rounded-lg">
        <p>How do I search for properties on Estatein?</p>
        <p className='text-[#999999] text-xs'>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
        <Button prop={{ name: "Read More" }} />
    </div>
  )
}

export default FAQCard
