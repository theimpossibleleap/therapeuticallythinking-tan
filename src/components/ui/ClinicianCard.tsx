import { Link } from '@tanstack/react-router'
import { Image } from '@unpic/react'

export default function ClinicianCard() {
  return (
    <>
      <Link
        to="/clinicians/lyndsey"
        className="flex flex-col shadow-[8px_8px_0_var(--color-eucalyptus)] rounded-2xl bg-glazed-pottery h-fit overflow-hidden text-warm-cream hover:scale-102 transition-all ease-in-out duration-300 hover:shadow-[12px_12px_0_var(--color-emerald)] cursor-pointer"
      >
        <Image
          src="/images/lyndsey_troccoli.png"
          layout="fullWidth"
          alt="This is a picture of a dog."
          className="inset-0 w-full object-cover object-top max-h-150 md:max-h-120"
        />
        <div className="p-6 flex flex-col gap-2">
          <h1 className="font-bold tracking-wider uppercase text-emerald text-2xl">
            Lyndsey Troccoli, LMFT
          </h1>
          <h2 className="font-bold uppercase warm-cream text-lg">FOUNDER</h2>
          <p>
            The founder of Therapeutically Thinking, this therapist specializes
            in supporting adults with ADHD, autism, and trauma, as well as
            caregivers of children with similar needs. With a trauma-informed,
            LGBTQ affirming, and neurodivergent identity-affirming approach,
            they integrate EMDR, parts and memory work, and DBT-informed therapy
            to help clients process experiences, challenge negative beliefs, and
            build practical strategies for a more balanced and fulfilling life.
          </p>
        </div>
      </Link>
    </>
  )
}
