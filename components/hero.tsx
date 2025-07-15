// components/Hero.tsx
import { siteConfig } from '@/config/site';
import Image from 'next/image';

export function Hero() {
  return (
    <div className="flex h-screen flex-col justify-between py-36">
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Text Section */}
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h3 className="mb-2 pl-1 text-lg leading-6 text-highlight">Hi all. I am</h3>
          <h6 className="text-4xl sm:text-6xl text-highlight">Shreyash</h6>
          <h6 className="text-4xl sm:text-6xl text-highlight">Ghanekar</h6>
          <h3 className="pl-1 text-lg font-medium text-theme-green">{'>'} Software Engineer</h3>
        </div>

        {/* Photo Section */}
        <div className="relative group mb-6 sm:mb-0">
          <Image
            src="/assets/shreyash.jpg"
            alt="Shreyash Ghanekar"
            width={320}
            height={320}
            className="rounded-full border-4 border-theme-green transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
