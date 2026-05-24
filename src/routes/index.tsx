import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import Splash from '#/components/layout/Splash'
import { Image } from '@unpic/react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="font-play">
      <Splash />
      <div id="mainContainer" className="w-full h-full flex justify-center">
        <main className="p-8 sm:p-12 w-full max-w-350 flex gap-20 flex-col">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="relative aspect-square sm:min-w-125 max-w-125 w-full">
              <Image
                src="/images/dog.jpg"
                layout="fullWidth"
                alt="This is a picture of a dog."
                className="absolute inset-0 h-full w-full object-cover rounded-2xl shadow-[8px_8px_0_var(--color-eucalyptus)]"
              />
            </div>
            <section className="sm:p-20 sm:my-0 my-12 p-1">
              <h1 className="text-5xl font-bold text-glazed-pottery mb-2">
                Who We <span className="font-thin italic">Help.</span>
              </h1>
              <h2 className="mb-16 text-emerald italic text-xl">
                Support for the way your mind actually works.
              </h2>
              <p className="mb-16 text-lg">
                At <strong>Therapeutically Thinking</strong>, we work with
                adults, couples, and families who are trying to make sense of
                patterns that may have felt confusing, overwhelming, or hard to
                explain. Whether you’re navigating ADHD, autism, trauma,
                anxiety, burnout, relationship stress, or the weight of
                constantly holding everything together, therapy here is designed
                to help you feel understood.
              </p>
              <Link
                to="/"
                className="cursor-pointer text-lg max-w-fit flex items-center justify-center gap-2 bg-terra-cotta text-white/90 py-2 px-4 rounded-full hover:bg-emerald transition-all duration-200 ease-in-out"
              >
                Our Story <ArrowRight size={20} />
              </Link>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
