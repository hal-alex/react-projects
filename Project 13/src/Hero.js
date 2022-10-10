import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className="hero">
      <div className="hero-center">
        <article className='hero-info'>
          <h1>Testing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit, expedita deserunt nam quos corrupti quo fuga aliquid explicabo sed. Aliquam soluta aspernatur, distinctio est quaerat sit deserunt esse placeat.</p>
          <button className='btn'>Sign up</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  )
}

export default Hero
