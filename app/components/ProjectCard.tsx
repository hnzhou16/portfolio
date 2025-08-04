import {btn, cn, layout, nav, typo} from "@/utils/classnames";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface ProjectCardProps {
  project: {
    summary: string;
    title: string;
    description: string;
    image: string;
    tools?: string[];
    frontend?: string;
    backend?: string;
    live?: string;
    showWebsite: boolean;
  };
  index: number;
}

// Tailwind does not support dynamic class names (like bg-card-background-${index+1})
// unless they are statically analyzable by the compiler.
const bgColors = [
  "bg-card-background-1",
  "bg-card-background-2",
  "bg-card-background-3",
];


export default function ProjectCard({project, index}: ProjectCardProps) {
  const router = useRouter();
  const showWebsite = project.showWebsite;
  const bgColor = bgColors[index % bgColors.length];

  return (
    // sticky: The element behaves like relative until you scroll PAST it,
    // then it "sticks" to the top of the nearest scrollable container (here, the page/viewport).
    // set project-container to be relative so sticky components can snap to it
    <div
      className={`project-card w-full py-20 ${bgColor} overflow-hidden sticky top-0`}
      style={{
        zIndex: 10 + index
      }}
    >
      <div className={layout.section}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative h-64 lg:h-auto">
            <div className="w-full h-full flex items-center justify-center">
              <Image src={project.image} alt="project image" width={300} height={300}
                     className="w-fit lg:w-full object-cover"/>
            </div>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h4 className={cn(typo.h4)}>{project.summary}</h4>
            <h2 className={cn(typo.h2, "mb-4")}>
              {project.title}
            </h2>
            <p className={cn(typo.p1, "mb-6")}>
              {project.description}
            </p>
            <div className="flex flex-row flex-wrap gap-3 mb-6">
              {project.tools?.map((tool, index) => {
                return <div key={index} className={nav.tag}>{tool}</div>
              })}
            </div>
            {showWebsite
              ? <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={project.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.secondary}
                >
                  <div className="flex flex-row justify-center items-center">
                  <p>Frontend</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                       className="w-5 h-5 ml-3">
                    <path
                      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                  </div>
                </a>
                <a
                  href={project.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.secondary}
                >
                  <div className="flex flex-row justify-center items-center">
                    <p>Backend</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="w-5 h-5 ml-3">
                      <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                      <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                  </div>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btn.primary}
                >
                  <div className="flex flex-row justify-center items-center">
                    <p>Live Site</p>
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                           stroke="currentColor" className="w-5 h-5 ml-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              : <div
                key={index}
                onClick={() => router.push('/data-driven-design')}
                className={cn(btn.primary, "w-fit")}
              >
                <div className="flex flex-row justify-center items-center">
                  <p>Read More</p>
                  <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                         stroke="currentColor" className="w-5 h-5 ml-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
}
