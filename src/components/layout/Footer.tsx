import { Phone, MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer className="bg-terra-cotta h-fit min-h-48 text-warm-cream w-full">
        <div
          id="footerContainer"
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-stretch w-full max-w-350 gap-10 py-8 px-6 sm:px-12">
            <div className="text-sm col-span-1 md:col-span-2 mb-12 lg:mb-0">
              <p className="mb-6 border-b pb-3 uppercase tracking-widest">
                Therapeutically Thinking
              </p>
              <p className="text-3xl font-thin">
                {'"Because today is almost over."'}
              </p>
              <p className="italic font-thin">-Michael Scott</p>
            </div>
            <div className="text-sm mb-12 sm:mb-0">
              <p className="font-bold mb-6 border-b pb-3">Stay Connected</p>
              <ul className="flex gap-4 flex-col">
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram-icon lucide-instagram"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <a href="#" className="footer-link">
                    Instagram
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook-icon lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <a href="#" className="footer-link">
                    Facebook
                  </a>
                </li>
                <li className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter-icon lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <a href="#" className="footer-link">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-sm sm:mb-0">
              <p className="font-bold mb-6 pb-3 border-b">Contact</p>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center">
                  <Phone size={16} />
                  <p>+1 (702) 555-1212</p>
                </li>
                <li className="flex gap-2 items-start">
                  <MapPin size={16} />
                  <div>
                    <p>1212 Fake Road</p>
                    <p>Henderson, NV 89014</p>
                  </div>
                </li>
                <li className="flex gap-2 items-center">
                  <Mail size={16} />
                  <a href="#" className="footer-link">
                    info@therapeuticallythinking.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
