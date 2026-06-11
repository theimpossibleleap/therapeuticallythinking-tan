import { createFileRoute } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export const Route = createFileRoute('/_pages/ourstory')({
  component: OurStory,
})

function OurStory() {
  return (
    <section className="w-full min-h-fit max-w-350 px-12 mb-16 flex flex-col gap-10">
      <h1 className="font-medium text-lg md:text-3xl text-glazed-pottery">
        Our <span className="italic">Story</span>.
      </h1>
      <h2 className="text-3xl md:text-6xl">
        Where <span className="italic text-emerald">understanding</span> and{' '}
        <span className="italic text-emerald">acceptance</span> come before
        change.
      </h2>
      <div className="flex flex-col items-center md:block">
        <div className="relative float-left mr-16 mb-8 w-96 h-120">
          <Image
            src="/images/lyndsey_troccoli.png"
            layout="fullWidth"
            alt="This is a picture of a dog."
            className="absolute inset-0 h-full w-full object-cover rounded-2xl shadow-[8px_8px_0_var(--color-eucalyptus)]"
          />
        </div>
        <p className="text-2xl mb-16">
          <span className="text-glazed-pottery">Therapeutically Thinking</span>{' '}
          was founded by a therapist with lived experience of ADHD, autism, and
          neurodivergence within family life. The practice grew from both
          professional experience and the awareness that the kind of support
          many neurodivergent people and families need is often difficult to
          find, afford, or sustain. Too often, people are left trying to piece
          things together on their own — searching for answers, waiting for the
          right provider, or trying strategies that were never designed for how
          their mind or family actually works. Therapeutically Thinking was
          created to help close that gap. We offer therapy that is connected,
          practical, and affirming, beginning with understanding how each person
          thinks, feels, relates, and moves through the world. From there, we
          work collaboratively to build insight, acceptance, and strategies that
          fit real life.
        </p>
        <p className="text-2xl mb-16">
          Too often, people are left trying to piece things together on their
          own, searching for answers, waiting for the right provider, or trying
          strategies that were never designed for how their mind or family
          actually works.
        </p>
        <p className="text-2xl mb-16">
          Therapeutically Thinking was created to help close that gap. We offer
          therapy that is connected, practical, and affirming, beginning with
          understanding how each person thinks, feels, relates, and moves
          through the world. From there, we work collaboratively to build
          insight, acceptance, and strategies that fit real life.
        </p>
      </div>
    </section>
  )
}
