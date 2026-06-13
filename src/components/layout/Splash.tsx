import { Image } from '@unpic/react'

export default function Splash() {
  return (
    <>
      <section className="relative min-h-fit h-fit z-5 flex w-full justify-center pt-40 pb-10 overflow-clip bg-glazed-pottery px-16">
        <div className="flex items-center justify-center">
          <div className="w-full flex flex-col gap-14 mb-12 ">
            <h1 className="w-4/5 text-white text-2xl lg:text-3xl xl:text-4xl font-thin">
              Therapy for the way you{' '}
              <span className="italic text-warm-cream">think</span>,{' '}
              <span className="italic text-warm-cream">feel</span>, and{' '}
              <span className="italic text-warm-cream">move</span> through the
              world.
            </h1>
            <h2 className="text-lg sm:text-xl max-w-96 lg:max-w-125 text-white">
              Affirming therapy for people who want to better understand
              themselves, find strategies that actually fit, and move through
              life with more clarity and compassion.
            </h2>
            <p className=" text-white italic text-md">
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
            className="absolute lg:static top-0 left-0 object-cover overflow-none -z-10 border-b border-warm-cream/55 w-full h-full opacity-25 lg:opacity-100 lg:w-120 lg:h-120 rounded-xl shadow-[8px_8px_0_var(--color-terra-cotta)] border lg:block"
          />
        </div>
      </section>
    </>
  )
}
