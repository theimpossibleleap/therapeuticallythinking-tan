import Link from 'next/link'
import { Image } from '@unpic/react'
import { useUIStore } from '@/app/stores/uiStore'
import { X } from 'lucide-react'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
})

export default function MobileMenu() {
  const showMenu = useUIStore((state) => state.mobileMenu)
  const setShowMenu = useUIStore((state) => state.toggleMobileMenu)
  return (
    <div
      className={`px-4 py-[0.425em] sm:px-12 z-1000 transition-all duration-300 ease-in-out fixed top-0 left-0 bg-glazed-pottery/80 backdrop-blur-xl w-full h-dvh ${showMenu ? 'visible opacity-100' : 'invisible opacity-0'}`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-thin delay-20 transition-all duration-300 ease-in-out"
          >
            <Image
              src="/images/thera_horizontal@3x.png"
              alt="horizontal logo"
              width={60}
              height={60}
            />
          </Link>
          <div
            className={`flex flex-col text-warm-cream ${playfairDisplay.className} tracking-[0.3em]`}
          >
            <p>THERAPEUTICALLY</p>
            <p>THINKING</p>
          </div>
        </div>
        <X color={'#fff'} onClick={() => setShowMenu()} />
      </div>
      <ul className="text-4xl h-full items-center flex flex-col gap-8 font-thin pt-20 text-warm-cream">
        <li>
          <Link
            className="mobile-menu-button"
            href="/ourstory"
            onClick={() => setShowMenu()}
          >
            Our Story
          </Link>
        </li>
        <li>
          <Link
            className="mobile-menu-button delay-10"
            href="/clinicians"
            onClick={() => setShowMenu()}
          >
            Clinicians
          </Link>
        </li>
        <li>
          <Link
            className="mobile-menu-button"
            href="/services"
            onClick={() => setShowMenu()}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="mobile-menu-button"
            href="/pricing"
            onClick={() => setShowMenu()}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className="mobile-menu-button"
            href="/events"
            onClick={() => setShowMenu()}
          >
            Events
          </Link>
        </li>
      </ul>
    </div>
  )
}
