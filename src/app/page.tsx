'use client'
import Image from 'next/image'
import gsap, { random } from 'gsap'
import { useEffect, useRef } from 'react'
import Bounded from './component/Bounded'

export default function Home() {
  const component = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.fromTo(
        '.name-animation',
        {
          x: -100,
          opacity: 0,
          rotate: -10,
        },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
          transformOrigin: 'left top',
          stagger: {
            each: 0.1,
            from: 'random',
          },
        }
      )

      tl.fromTo(
        '.slogan',
        {
          y: 20,
          opacity: 0,
          scale: 1.2,
        },
        {
          opacity: 1,
          delay: 0.2,
          y: 0,
          ease: 'elastic.out(1,0.3)',
          duration: 1,
          scale: 1,
        }
      )
    }, component)
    return () => ctx.revert()
  })

  const renderLetters = (name: String, key: String) => {
    if (!name) return

    return name.split('').map((character, index) => {
      return (
        <span
          key={index}
          className={`name-animation name-animation-${key} inline-block opacity-50`}
        >
          {character === ' ' ? '\u00A0' : character}
        </span>
      )
    })
  }

  return (
    <Bounded
      className='flex min-h-screen flex-col items-center justify-between p-24'
      ref={component}
    >
      <div>
        <h1 className='text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter text-nowrap'>
          <span className='block text-slate-500'>
            {renderLetters('PARORO', 'first')}
          </span>
          <span className=' -mt-[.2em] block text-slate-400'>
            {renderLetters('KOREAN BBQ', 'second')}
          </span>
          <span className='slogan block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold tracking-[.2em] text-transparent opacity-0 md:text-4xl'>
            ALL YOU CAN EAT
          </span>
        </h1>
      </div>
    </Bounded>
  )
}
