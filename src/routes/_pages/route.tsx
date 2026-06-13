import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages')({
  component: Pages,
})

function Pages() {
  return (
    <section className="w-full h-screen min-h-fit flex justify-center pt-16 lg:pt-24">
      <Outlet />
    </section>
  )
}
