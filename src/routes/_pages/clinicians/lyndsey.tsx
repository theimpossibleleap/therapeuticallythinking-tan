import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages/clinicians/lyndsey')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="w-full min-h-fit max-w-350 px-12 mb-16 flex flex-col gap-10">
      <Link to="/clinicians">← Back to Clinicians</Link>
      <h1 className="font-medium text-lg md:text-3xl text-glazed-pottery">
        <span className="italic">Lyndsey</span>.
      </h1>
    </section>
  )
}
