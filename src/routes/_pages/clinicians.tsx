import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/clinicians')({
  component: Clinicians,
})

function Clinicians() {
  return (
    <section className="w-full min-h-fit max-w-350 px-12 mb-16 flex flex-col gap-10">
      <h1 className="font-medium text-lg md:text-3xl text-glazed-pottery">
        <span className="italic">Clinicians</span>.
      </h1>
    </section>
  )
}
