import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_pages')({
  component: Pages,
})

function Pages() {
  return (
    <section className="w-full h-screen min-h-screen flex justify-center pt-32">
      <Outlet />
    </section>
  )
}
