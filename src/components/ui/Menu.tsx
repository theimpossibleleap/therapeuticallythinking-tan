import Link from 'next/link'

export default function Menu() {
  return (
    <div className="gap-4 hidden lg:flex">
      <Link className="menu-button delay-40" href="/ourstory">
        Our Story
      </Link>
      <Link className="menu-button delay-60" href="/clinicians">
        Clinicians
      </Link>
      <Link className="menu-button delay-80" href="/services">
        Services
      </Link>
      <Link className="menu-button delay-100" href="/pricing">
        Pricing
      </Link>
      <Link className="menu-button delay-120" href="/events">
        Events
      </Link>
    </div>
  )
}
