import {cn, layout} from "@/utils/classnames";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className={cn(layout.section, "text-center")}>
        <p className="text-text-muted">
          © 2025 Hangning Zhou. All rights reserved.
        </p>
      </div>
    </footer>
  )
}