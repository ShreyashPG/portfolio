import { AboutMeItem } from '@/components/about-me-item';
import { Hero } from '@/components/hero';
import { ProjectItem } from '@/components/projects';
import { Section } from '@/components/section';
import { WorkExperienceItem } from '@/components/work-experience-item';
import { aboutMeConfig } from '@/config/about-me';
import { projectsConfig } from '@/config/projects';
import { workExperienceConfig } from '@/config/work-experience';

export default function IndexPage() {
  return (
    <>
      <div id="content" className="mx-auto px-8 md:w-2/3">
        <Hero />
        <div className="flex flex-col gap-12">
          <Section id="about-me" title="About Me">
            {aboutMeConfig.map((aboutMeItem, index) => (
              <AboutMeItem key={index} {...aboutMeItem} />
            ))}
          </Section>
          <Section id="work-experience" title="Work Experience">
            {workExperienceConfig.map((workExperience, index) => (
              <WorkExperienceItem key={index} {...workExperience} />
            ))}
          </Section>
          <Section id="projects" title="Projects">
            {projectsConfig.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </Section>
          
        </div>
      </div>
    </>
  );
}
