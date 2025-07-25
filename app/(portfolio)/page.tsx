import { AboutMeItem } from '@/components/about-me-item';
import { Hero } from '@/components/hero';
import { ProjectItem } from '@/components/projects';
import { Section } from '@/components/section';
import { SkillsItem } from '@/components/skills-item';
import { WorkExperienceItem } from '@/components/work-experience-item';
import { SocialLinks } from '@/components/social-links';

import { aboutMeConfig } from '@/config/about-me';
import { projectsConfig } from '@/config/projects';
import { workExperienceConfig } from '@/config/work-experience';
import { skillsConfig } from '@/config/skills';

export default function IndexPage() {
  return (
    <>
      <div id="content" className="mx-auto px-8 md:w-2/3">
        <Hero />
        <SocialLinks />
        <div className="mt-12 flex flex-col gap-12">
          <Section id="about-me" title="About Me">
            {aboutMeConfig.map((aboutMeItem, index) => (
              <AboutMeItem key={index} {...aboutMeItem} />
            ))}
          </Section>
          <Section id="skills" title="Skills">
            {skillsConfig.map((skills, index) => (
              <SkillsItem key={index} {...skills} />
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
