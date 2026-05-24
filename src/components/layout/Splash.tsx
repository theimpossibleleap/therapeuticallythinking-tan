import { Image } from '@unpic/react'

export default function Splash() {
  return (
    <>
      <section className="relative min-h-fit h-dvh z-5 flex flex-col w-full justify-center items-center pt-30 overflow-clip">
        <div className="px-8 sm:px-12 max-w-350 flex flex-col gap-14 mb-12">
          <h1 className="w-4/5 text-white text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin">
            Therapy for the way you{' '}
            <span className="italic text-warm-cream">think</span>,{' '}
            <span className="italic text-warm-cream">feel</span>, and{' '}
            <span className="italic text-warm-cream">move</span> through the
            world.
          </h1>
          <h2 className="text-lg sm:text-2xl max-w-96 lg:max-w-125 text-white">
            Affirming therapy for people who want to better understand
            themselves, find strategies that actually fit, and move through life
            with more clarity and compassion.
          </h2>
          <p className=" text-white italic text-md sm:text-lg">
            Serving Las Vegas and online across Nevada.
          </p>
          <div className="flex gap-2 sm:gap-6">
            <button className="cursor-pointer w-fit text-sm sm:text-lg flex items-center justify-center gap-2 bg-terra-cotta text-white/90 py-2 px-6 rounded-full hover:bg-eucalyptus transition-all duration-200 ease-in-out">
              {`Let's Chat`}
            </button>
            <button className="cursor-pointer w-fit text-sm sm:text-lg flex items-center justify-center gap-2 bg-warm-cream text-eucalyptus py-2 px-6 rounded-full hover:bg-eucalyptus hover:text-warm-cream transition-all duration-200 ease-in-out">
              Our Approach to Therapy
            </button>
          </div>
        </div>
        <Image
          src="/images/cat.jpg"
          alt=""
          layout="fullWidth"
          className="absolute left-0 top-0 h-[calc(100dvh-10px)] min-h-[calc(100dvh-10px)] w-full object-cover overflow-none -z-10 border-b border-glazed-pottery/50"
        />
      </section>
    </>
  )
}
