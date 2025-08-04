'use client';

import Image from "next/image";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import {btn, cn, layout, nav, typo} from "@/utils/classnames";
import {projects, skillGroups} from "@/utils/content";
import Link from "next/link";
import {useState} from "react";

export default function Home() {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [status, setStatus] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //
  //   const res = await fetch('/api/send-email', {
  //     method: 'POST',
  //     body: JSON.stringify({name, email, message}),
  //     headers: {'Content-Type': 'application/json'},
  //   });
  //
  //   const data = await res.json();
  //   setStatus(data.success ? 'Message sent!' : 'Failed to send.');
  // };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header/>

      {/* About Section */}
      <section id="about" className="mt-20 py-20 bg-background scroll-mt-16">
        <div className={layout.section}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col justify-start max-w-4xl">
              <h4 className={typo.h4}>Full-Stack Software Engineer | Computational Designer</h4>
              <h1 className={cn(typo.h1, "mb-3")}>HANGNING ZHOU</h1>
              <p className={cn(typo.p1, "mb-3")}>
                <span className="font-bold">Full-Stack Software Engineer with a strong foundation in problem-solving, debugging, and systems thinking. </span>
                With a background in architectural design and a long-standing interest in computational thinking,
                I bring a unique blend of creativity and technical rigor to software engineering.
                My transition into software development was driven by a deep passion for reasoning through complex
                challenges and crafting efficient, scalable solutions. Known for sharp troubleshooting skills, I thrive
                in collaborative, agile environments and am committed to building reliable, user-centered applications.
              </p>
              <button
                onClick={() => scrollToSection('projects')}
                className={cn("w-fit", btn.secondary)}
              >
                <div className="flex flex-row justify-center items-center">
                  <p>My Work</p>
                  <div className="text-accent">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3"
                         stroke="currentColor" className="w-5 h-5 ml-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
            <div className="ml-10">
              <Image
                src="/avatar.JPG"
                alt="avatar"
                width={600}
                height={600}
                className="min-w-[300px] object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full bg-foreground scroll-mt-16">
        <div className={layout.section}>
          <h2 className={cn(typo.h2, "text-white mb-6")}>Skills</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
            {/* map()=>{return} or map()=>()*/}
            {skillGroups.map((group, index) => {
              return <div key={group.category + index} className="flex flex-col">
                <div className="flex flex-row items-center gap-3 mb-3">
                  <div className="w-5 h-5 bg-accent"></div>
                  <h3 className="text-background text-lg font-semibold">{group.category}</h3>

                </div>
                <div className="flex flex-row flex-wrap gap-3">
                  {group.skills.map((s, index) => {
                    return <div key={index} className={nav.tag}>{s}</div>
                  })}
                </div>
              </div>
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-card-background-1 scroll-mt-16">
        <div className={cn(layout.section, "pb-0")}>
          <h2 className={typo.h2}>
            Projects
          </h2>
        </div>
        <div className="projects-container w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index}/>
          ))}
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-10 bg-foreground scroll-mt-16">
        <div className={layout.section}>
          <h2 className={cn(typo.h2, "text-white mb-6")}>
            Let&apos;s Connect
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Social Links */}
            <div className="flex flex-row space-x-5">
              <Link
                href="https://github.com/hnzhou16"
                className="w-8 h-8 bg-background rounded-full flex items-center justify-center text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"
                     stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="w-7 h-7">
                  <path
                    d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/hangning-zhou"
                className="w-8 h-8 bg-background rounded-full flex items-center justify-center text-foreground text-2xl font-extrabold">in
              </Link>
              <div
                onClick={() => {
                  navigator.clipboard.writeText("hnzhou16@outlook.com");
                  alert("Email address copied!");
                }}
                className="w-8 h-8 bg-background rounded-full flex items-center justify-center text-foreground cursor-pointer"
                title="Click to copy email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
            </div>

            {/* Contact Form */}
            {/*<div className="p-8">*/}
            {/*  <form onSubmit={handleSubmit} className="space-y-6">*/}
            {/*    <div>*/}
            {/*      <label htmlFor="name" className={form.label}>Name</label>*/}
            {/*      <input*/}
            {/*        type="text"*/}
            {/*        id="name"*/}
            {/*        value={name}*/}
            {/*        onChange={(e) => setName(e.target.value)}*/}
            {/*        className={form.input}*/}
            {/*        placeholder="Your name"*/}
            {/*        required*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <label htmlFor="email" className={form.label}>Email</label>*/}
            {/*      <input*/}
            {/*        type="email"*/}
            {/*        id="email"*/}
            {/*        value={email}*/}
            {/*        onChange={(e) => setEmail(e.target.value)}*/}
            {/*        className={form.input}*/}
            {/*        placeholder="your.email@example.com"*/}
            {/*        required*/}
            {/*      />*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*      <label htmlFor="message" className={form.label}>Message</label>*/}
            {/*      <textarea*/}
            {/*        id="message"*/}
            {/*        rows={4}*/}
            {/*        value={message}*/}
            {/*        onChange={(e) => setMessage(e.target.value)}*/}
            {/*        className={form.input}*/}
            {/*        placeholder="Your message..."*/}
            {/*        required*/}
            {/*      ></textarea>*/}
            {/*    </div>*/}
            {/*    <p className={cn(typo.p1, "text-white")}>{status}</p>*/}
            {/*    <button*/}
            {/*      type="submit"*/}
            {/*      className={cn(btn.primary, "w-full")}*/}
            {/*    >*/}
            {/*      Send Message*/}
            {/*    </button>*/}
            {/*  </form>*/}
            {/*</div>*/}
          </div>
        </div>
      </section>
    </div>
  );
}
