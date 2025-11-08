// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

const Header = () => {
  return (
    // Outer Header Container: Transparent background
    <header className="absolute top-0 left-0 right-0 py-6 md:py-8 text-white w-full z-20">
             
      {/* Main Content Container: This container goes edge-to-edge (or nearly so) and spaces out the Logo and Button. */}
      <div className="w-full max-w-full mx-auto flex justify-between items-center px-6 sm:px-8 md:px-10 lg:px-16 relative">
                
        {/* 1. Logo/Brand Name (Extreme Left) */}
        <div className="flex-shrink-0 z-10 pl-4 sm:pl-6 md:pl-8 lg:pl-12">
          {/* Link to homepage and display optimized logo from public/ */}
          <Link href="/">
            <Image
              src="/sysusalogo.png"
              alt="SYSUSA logo"
              width={140}
              height={36}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>
        
        {/* 2. Navigation Menu Group (Center Positioned) */}
        <nav 
          className="hidden lg:block absolute left-1/2 -translate-x-1/2
                      border border-white/20 rounded-full
                      px-8 py-3 shadow-lg backdrop-blur-sm z-0"
        >
          <ul className="flex space-x-8">
                        
            {/* Navigation Items */}
            {['Company', 'Expertise', 'Careers', 'Resources', 'Client'].map((item) => (
              <li key={item} className="relative group">
                <Link 
                  href={`/${item}`}
                  className="text-white hover:text-white text-base font-medium transition duration-150 flex items-center"
                >
                  {item} 
                  {/* Add dropdown arrow for Expertise and Resources */}
                  {(item === 'Expertise' || item === 'Resources') && (
                    <span className="ml-1 text-[0.6rem] inline-block pt-1">⌄</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* 3. Contact Us Button (Extreme Right) */}
        <div className="hidden lg:block flex-shrink-0 z-10">
          <Button 
            href="/contact"
            // Custom colors
            bgColor="bg-white" 
            hoverBgColor="hover:bg-gray-100" 
            textColor="text-black"
            hoverTextColor="hover:text-black" 
                        
            // Sizing for 165px x 42px
            width="w-[165px]" 
            height="h-[42px]"
            padding="py-0 px-0"
            
            // Shape and Effects
            borderRadius="rounded-[30px]" 
            fontSize="text-base"
            fontWeight="font-medium"
            shadow="shadow-xl"
            scale="" 
            transition=""
          >
            Contact Us 
          </Button>
        </div>
        
        {/* Mobile menu button (Hamburger icon - for responsiveness) */}
        <div className="lg:hidden">
          {/* ... mobile button implementation ... */}
        </div>
      </div>
    </header>
  );
};

export default Header;