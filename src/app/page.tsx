import Image from 'next/image'

export default function Home() {
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
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <h1 className='text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter'>
          <span className='block text-slate-500'>
            {renderLetters('PARORO', 'first')}
          </span>
          <span className='-mt-[.2em] block text-slate-400'>
            {renderLetters('KOREAN BBQ', 'second')}
          </span>
          <span className='block bg-gradient-to-tr from-yellow-500 via-yellow-200 to-yellow-500 bg-clip-text text-2xl font-bold tracking-[.2em] text-transparent opacity-1 md:text-4xl'>
            ALL YOU CAN EAT
          </span>
        </h1>
      </div>
    </main>
  )
}
