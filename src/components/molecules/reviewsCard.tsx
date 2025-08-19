import React from 'react'
import stars from '../../assets/Home/rating.png'
import human from '../../assets/Home/human.png'

function ReviewsCard() {
  return (
    <div className="flex flex-col xl:max-w-[400px] justify-start items-start text-white px-[20px] py-[25px] border-1 border-[#262626] rounded-lg">
        <img src={stars} alt="" className='h-[35px]'/>
        <p className='text-md my-5'>Exceptional Service!</p>
        <p className='text-[10px]'>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
        <div className='flex justify-start items-center gap-[10px] mt-[20px]'>
            <img src={human} alt="" className='h-[40px]'/>
            <div className='flex flex-col text-xs gap-1'>
                <p>Emelie Thomson</p>
                <p className='text-[#999999] text-[10px]'>USA, California</p>
            </div>
        </div>
    </div>
  )
}

export default ReviewsCard
