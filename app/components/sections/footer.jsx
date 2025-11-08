import Link from 'next/link';
import { MapPin, Phone, Share2, Linkedin, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Image from 'next/image';
// X/Twitter Icon Component
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="text-white" style={{ background: '#0B1D44' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Section */}
          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise Section */}
          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider">EXPERTISE</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicenow" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  ServiceNow
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider">MORE</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/contracts" className="text-gray-300 hover:text-white transition-colors text-sm footer-typography">
                  Contract Vehicles
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section - Column 1 */}
          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider">CONTACT US</h3>
            <div className="space-y-5">
              {/* Virginia Location */}
              <div className="flex gap-3">
              <Image src={"/location.svg"} alt="logo" width={20} height={20} />
                <div>
                  <p className="font-semibold text-sm mb-1">Society4Code.com Inc. Virginia</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    8565 Sudley Road, Suite C,<br />Manassas, VA 20110
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
               <Image src={"/phoneicon.svg"} alt="logo" width={20} height={20} />
                <div>
                  <span className="font-semibold text-sm">CALL: </span>
                  <a href="tel:2028006040" className="text-gray-300 hover:text-white transition-colors text-sm">
                    (202) 800-6040
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section - Column 2 */}
          <div>
            <h3 className="text-sm font-bold mb-6 tracking-wider opacity-0">CONTACT</h3>
            <div className="space-y-5">
              {/* Texas Location */}
              <div className="flex gap-3">
                <Image src={"/location.svg"} alt="logo" width={20} height={20} />
                <div>
                  <p className="font-semibold text-sm mb-1">TEXAS</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    555 Republic Drive,<br />Suite 450, Plano TX 75074
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                <Image src={"/shareicon.svg"} alt="logo" width={20} height={20} />
                  <p className="font-semibold text-sm">SOCIAL LINKS</p>
                </div>
                <div className="flex gap-3 ml-8">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border-2 border-gray-600 flex items-center justify-center hover:border-purple-500 hover:bg-purple-500/10 transition-all"
                    aria-label="X"
                  >
                    <XIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
     <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-blue-900/50 w-[95%] mx-auto"></div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-normal">
              Get latest news & insights with our monthly newsletter
            </h3>
            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="sample@mail.com"
                className="px-6 py-3 rounded-full bg-blue-950/60 border border-blue-800/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 w-full md:w-80 text-sm"
              />
             <Button>
                Subscribe
             </Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-blue-900/50 w-[95%] mx-auto"></div>
      </div>
      </div>

      {/* Bottom Footer with SVG Logo */}
      <div className="" style={{ background: '#0B1D44' }}>
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-center items-center">
            <svg 
              className="w-full max-w-4xl h-auto opacity-90" 
              viewBox="0 0 1295 149" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path opacity="0.5" d="M1295 146.611H1127.26L1154.21 109.527H1190.43C1199.06 109.527 1209.19 109.527 1216.09 109.958C1212.21 104.784 1206.17 95.944 1201.43 89.0446L1175.56 50.8826L1107.86 146.611H1055.03L1147.53 16.1703C1153.56 7.76174 1162.4 0 1176.42 0C1189.78 0 1198.62 7.11494 1204.88 16.1703L1295 146.611Z" fill="white"/>
              <path opacity="0.5" d="M913.834 59.9385H992.314C1027.46 59.9385 1046.43 73.0903 1046.43 99.3941C1046.43 128.932 1028.54 146.611 984.552 146.611H850.23L878.906 109.527H988.002C998.566 109.527 1003.31 106.509 1003.31 98.9629C1003.31 91.6323 998.566 88.6138 988.002 88.6138H909.522C872.438 88.6138 855.405 72.0123 855.405 47.2178C855.405 20.0516 873.516 2.37207 917.283 2.37207H1042.55L1013.87 39.8872H913.834C903.485 39.8872 898.526 42.4745 898.526 49.805C898.526 57.1356 903.485 59.9385 913.834 59.9385Z" fill="white"/>
              <path opacity="0.5" d="M833.345 2.37207V83.6549C833.345 127.207 803.376 148.983 743.438 148.983C674.013 148.983 644.044 127.207 644.044 83.6549V2.37207H688.459V83.6549C688.459 105 697.514 111.899 743.438 111.899C777.719 111.899 788.499 103.922 788.499 83.6549V2.37207H833.345Z" fill="white"/>
              <path d="M492.918 59.9385H571.398C606.541 59.9385 625.515 73.0903 625.515 99.3941C625.515 128.932 607.619 146.611 563.636 146.611H429.314L457.99 109.527H567.086C577.65 109.527 582.394 106.509 582.394 98.9629C582.394 91.6323 577.65 88.6138 567.086 88.6138H488.606C451.522 88.6138 434.489 72.0123 434.489 47.2178C434.489 20.0516 452.6 2.37207 496.367 2.37207H621.634L592.958 39.8872H492.918C482.569 39.8872 477.61 42.4745 477.61 49.805C477.61 57.1356 482.569 59.9385 492.918 59.9385Z" fill="white"/>
              <path d="M366.506 2.37207H422.564L336.969 98.9629V146.611H292.123V98.7472L204.156 2.37207H261.507L296.004 42.4745C300.531 47.649 312.605 60.8009 315.624 65.113C318.427 61.0165 323.386 54.7639 333.735 42.2589L366.506 2.37207Z" fill="white"/>
              <path d="M63.6033 59.9385H142.083C177.227 59.9385 196.2 73.0903 196.2 99.3941C196.2 128.932 178.305 146.611 134.322 146.611H0L28.6754 109.527H137.771C148.336 109.527 153.079 106.509 153.079 98.9629C153.079 91.6323 148.336 88.6138 137.771 88.6138H59.2912C22.2073 88.6138 5.17451 72.0123 5.17451 47.2178C5.17451 20.0516 23.2853 2.37207 67.053 2.37207H192.319L163.644 39.8872H63.6033C53.2543 39.8872 48.2954 42.4745 48.2954 49.805C48.2954 57.1356 53.2543 59.9385 63.6033 59.9385Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
      {/* Mini Copyright Footer */}
<div className="w-full font-inter text-white" style={{ background: '#112550' }}>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm px-6 py-4">
    <p>© {new Date().getFullYear()} Society4Code.com Inc. All rights reserved.</p>
    <div className="flex items-center gap-4 mt-2 md:mt-0">
      <Link href="/privacy-policy" className="hover:text-white transition-colors">
        Privacy Policy
      </Link>
      <span className="text-gray-600">|</span>
      <Link href="/terms" className="hover:text-white transition-colors">
        Terms of Service
      </Link>
    </div>
  </div>
</div>
    </footer>
  );
}