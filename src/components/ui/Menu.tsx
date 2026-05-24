import { Link } from '@tanstack/react-router'

export default function Menu() {
  return (
    <div className="gap-4 hidden lg:flex">
      <Link to="/ourstory" className="menu-button delay-40">
        Our Story
      </Link>
      <Link className="menu-button delay-60" to="/">
        Clinicians
      </Link>
      <Link className="menu-button delay-80" to="/">
        Services
      </Link>
      <Link className="menu-button delay-100" to="/">
        Pricing
      </Link>
      <Link className="menu-button delay-120" to="/">
        Events
      </Link>
    </div>
  )
}
