// components/SocialLinks.tsx
import { siteConfig } from '@/config/site';

export function SocialLinks() {
  return (
    <section className="mt-24 px-4 sm:px-8 lg:px-16">
      <h2 className="mt-8 mb-4 text-2xl font-bold text-highlight">{'//'} Connect with me</h2>
      
      <div className="space-y-4 text-sm">
        {/* GitHub */}
        <div className="font-medium">
          <h3 className="text-theme-gray">{'//'} Find my profile on GitHub.</h3>
          <span className="text-theme-green">githubLink</span>
          <span className=""> = </span>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-red hover:text-hover"
          >
            {'"'}
            {siteConfig.links.github}
            {'"'}
          </a>
          <span>;</span>
        </div>

        {/* LinkedIn */}
        <div className="font-medium">
          <h3 className="text-theme-gray">{'//'} Find my profile on LinkedIn.</h3>
          <span className="text-theme-green">linkedinLink</span>
          <span className=""> = </span>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-theme-red hover:text-hover"
          >
            {'"'}
            {siteConfig.links.linkedin}
            {'"'}
          </a>
          <span>;</span>
        </div>
      </div>
    </section>
  );
}
