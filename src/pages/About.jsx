import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='p-10'>
      <p className='text-lg'>Welcome to Technical Hub, where we are passionate about all things coding and technology. Our mission is to empower individuals from all backgrounds to embark on a journey of learning, creativity, and innovation through coding.</p>

      <h1 className='font-bold m-8 text-3xl'>Our Story</h1>
      <span>Our story began with a simple idea: to make the world of coding accessible and enjoyable for everyone. We understand that coding can seem intimidating, but it doesn't have to be. Our founders, [Founder Names], envisioned a platform where beginners and experts alike could come together to learn, share, and grow their coding skills.

With a shared passion for technology and education, we set out to create a welcoming and supportive community. We started by offering tutorials, coding challenges, and resources to help individuals take their first steps in the world of programming. Over time, our community grew, and we expanded our offerings to cater to the diverse needs of our users.</span>

<h1 className='font-bold m-8 text-3xl'>What We Stand For</h1>
<div className='flex flex-col space-y-5 text-lg'>
<span>
At Technical Hub, we believe that coding is not just a skill; it's a superpower that can transform lives and drive innovation. We are committed to the following principles:
</span>
<span>
<b>Accessibility:</b> We are dedicated to making coding accessible to everyone, regardless of their background, age, or experience level. Our resources are designed to be beginner-friendly, and our community is always ready to offer guidance and support.
</span>
<span>
<b>Quality Education:</b> We believe in the importance of high-quality educational content. Our team of experienced instructors and developers works tirelessly to create engaging tutorials, courses, and coding challenges that help you build real-world skills.
</span>
<span>
<b>Community:</b> Our community is at the heart of what we do. We encourage collaboration, networking, and knowledge sharing among our members. Whether you're a seasoned coder or just starting, you'll find a welcoming and inclusive environment here.
</span>
<span>
<b>Innovation:</b> We're passionate about staying at the forefront of technology. Our platform continually evolves to reflect the latest trends and advancements in the coding world. We want our users to be well-prepared for the future.
</span>
</div>
      </div>
    </div>
  )
}

export default About
