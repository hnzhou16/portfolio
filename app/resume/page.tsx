"use client"

import {btn, cn, layout} from "@/utils/classnames";
import Image from "next/image";

export default function Resume() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">

      {/* Resume Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className={layout.section}>
          <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
            <Image
              src="/resume_2025.png" // Add your resume image to public folder
              alt="Resume"
              width={850}
              height={1100}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Download Button */}
          <div className="flex flex-row justify-end mt-8">
            <a
              href="/resume_2025.pdf"
              download
              className={cn(btn.primary, "flex flex-row items-center w-fit")}
            >
              Download
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
