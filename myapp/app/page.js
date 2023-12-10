import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-5 py-24 flex items-center flex-col cursor-pointer'>
    <div class="flex flex-col text-center w-full mb-20">
    <h2 className='text-xs text-red-700 tracking-widest font-medium title-font mb-1'>FANVENTARENA</h2>
      <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-500'>Online Safe Space To Share Thoughts!</h1>
      <p
      className='lg:w-2/3 mx-auto leading-relaxed text-base'
      >
        Welcome to FanRantArena, where sports passion meets cutting-edge style. Dive into the eclectic world of fandom, where every thread is a journey through the cardigan-clad streets of sports discourse
        Unleash your thoughts in this asymmetrical arena where opinions flow like artisanal coffee, and debates are more intense than a Brooklyn street basketball game
      </p>
    </div>
    <div class="flex flex-wrap">
      <div class="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        </div>
        </div>
    </main>
  )
}
