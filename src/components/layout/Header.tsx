'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Menu from '../ui/Menu'
import { MenuIcon } from 'lucide-react'
import { useUIStore } from '@/app/stores/uiStore'
import MobileMenu from '../ui/MobileMenu'
import { Image } from '@unpic/react'
import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
})

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false)
  const showMenu = useUIStore((state) => state.mobileMenu)
  const setShowMenu = useUIStore((state) => state.toggleMobileMenu)

  const currentPath = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <>
      <header
        className={`h-16 flex justify-center w-full z-10 transition-all duration-400 ease-in-out  ${currentPath !== '/' ? 'sticky top-0 left-0' : 'fixed top-0 left-0'}`}
      >
        <nav
          className={`w-full sm:mx-8 mt-3 mx-2 lg:mt-8 h-18 transition-all duration-400 ease-in-out rounded-full ${scrolled || currentPath !== '/' ? 'bg-white/60 text-eucalyptus shadow-xl backdrop-blur-xl!' : 'text-warm-cream bg-warm-cream/0 backdrop-blur-none'}`}
        >
          <div className="flex justify-between items-center px-4 sm:px-8 h-full w-full">
            <div className="">
              <Link
                href="/"
                className="font-thin delay-20 transition-all duration-300 ease-in-out flex items-center"
              >
                <Image
                  src="/images/thera_horizontal@3x.png"
                  alt="horizontal logo"
                  width={60}
                  height={60}
                />

                <div
                  className={`flex font-medium flex-col ${playfairDisplay.className} tracking-[0.3em] text-sm sm:text-md`}
                >
                  <p>THERAPEUTICALLY</p>
                  <p>THINKING</p>
                </div>
              </Link>
            </div>
            <Menu />
            {!showMenu ? (
              <MenuIcon
                onClick={() => setShowMenu()}
                className="flex lg:hidden"
              />
            ) : (
              ''
            )}
          </div>
        </nav>
      </header>
      <MobileMenu />
    </>
  )
}
