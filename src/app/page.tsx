'use client'
import Image from 'next/image'
import gsap, { random } from 'gsap'
import { useEffect, useRef } from 'react'
import Bounded from '../component/Bounded'
import { Shapes } from '../utils/Shapes.jsx'

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
          className={`name-animation name-animation-${key} inline-block opacity-0`}
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
      <div className='grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center'>
        {/* <Shapes /> */}
        <div className='col-start-1 md:row-start-1'>
          <h1 className='mb-8 text-[clamp(2rem,10vmin,10rem)] font-extrabold leading-none tracking-tighter'>
            <span className=' block text-slate-500'>
              {renderLetters('PARORO', 'first')}
            </span>
            <span className='-mt-[.2em] block text-slate-400'>
              {renderLetters('KOREAN', 'second')}
            </span>
            <span className='-mt-[.2em] block text-slate-400'>
              {renderLetters('BBQ', 'second')}
            </span>
          </h1>
          <span className='text-2xl slogan block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text font-bold tracking-[.2em] text-transparent opacity-0 md:text-4xl'>
            ALL YOU CAN EAT
          </span>
        </div>
      </div>
    </Bounded>
  )
}
