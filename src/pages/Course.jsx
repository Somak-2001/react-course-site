import React from 'react'
import Navbar from '../components/Navbar';
const cur = [
  {
    id: 1,
    image: 'https://th.bing.com/th/id/OIP.wwx1vMjg6ymKse4jE6yC0wHaD4?pid=ImgDet&rs=1',
    subject: 'C++',
    description: 'C++ is a general-purpose programming language created by <NAME> as an extension of the C programming language. It was originally developed',
    price: '49$'
  },
  {
    id: 2,
    image: 'https://i.ytimg.com/vi/GoXwIVyNvX0/maxresdefault.jpg',
    subject: 'Java',
    description: 'Java is a general-purpose programming language created by <NAME> as an extension of the C programming language. It was originally developed',
    price: '65$'
  },
  {
    id: 3,
    image: 'https://www.tutorialbar.com/wp-content/uploads/3279118_faeb_4-1-2048x1152.jpeg',
    subject: 'Html',
    description: 'HTML is a general-purpose programming language created by <NAME> as an extension of the C programming language. It was originally developed',
    price: '50$'
  },
  {
    id: 4,
    image: 'https://th.bing.com/th/id/OIP.F68tQtaRAZnuXCt0so5OaAHaEK?pid=ImgDet&rs=1',
    subject: 'CSS',
    description: 'CSS is a general-purpose programming language created by <NAME> as an extension of the C programming language. It was originally developed',
    price: '55$'
  },
  {
    id: 5,
    image: 'https://www.tutorialbar.com/wp-content/uploads/2635498_6a46_2-2048x1152.jpg',
    subject: 'Javascript',
    description: 'Js is a general-purpose programming language created by <NAME> as an extension of the C programming language. It was originally developed',
    price: '55$'
  },
  {
    id: 6,
    image: 'https://i.ytimg.com/vi/KH_FeGlmH20/maxresdefault.jpg',
    subject: 'Dart',
    description: 'Dart is a general-purpose programming language created by <NAME> as an extension of the C programming language. It was originally developed',
    price: '95$'
  },
]
const Course = () => {
  return (
    <div>
    <Navbar />
      <h1 className='text-center text-4xl mt-14 mb-8'>Our Popular Courses</h1>
      <p className='text-center text-xl'>Replenish man have thing gathering lights yielding shall you</p>
      <div>
        <div className='flex flex-wrap'>
          {
           cur && cur.map((item) => {
              return (
                <div key={item.id} className='w-[10%] m-10 bg-slate-300 p-4 rounded-md shadow-md cursor-pointer'>
                <img src={item.image} alt='Subject' className='object-cover w-[100] h-[100]' />
                  <div className=' bg-sky-700 rounded-full text-white p-3 w-10 h-10'>{item.id}</div>
                  <div className='flex flex-col'>
                  <div className='text-2xl font-semibold w-48'>{item.subject}</div>
                  <div className='text-base font-serif font-thin'>{item.description}</div>
                  <div className='text-xl font-bold'>{item.price}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Course
