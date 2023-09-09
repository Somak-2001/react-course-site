import React from 'react';
const Background = () => {
  return (
    <div style={{backgroundImage: `url(${require('../img/programming-courses-back.jpg')})`}} className='w-full h-full flex justify-center items-center flex-col'>
    <h1 className='text-6xl shadow-md text-white text-center mt-56 font-bold'>Enhance Your Future With Technical Hub</h1>
      <div className=' text-white mt-16 mb-[17%] w-96 text-lg shadow-md'>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ipsum laboriosam </span>
      </div>
    </div>
  )
}

export default Background;
