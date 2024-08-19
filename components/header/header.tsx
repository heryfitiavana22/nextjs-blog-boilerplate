"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

export function Header({}: HeaderProps) {
  const path = usePathname();

  return (
    <header className="container px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center">
        <div className="h-6 w-6 bg-primary rounded-full"></div>
        <span className="sr-only">Blog and Projects</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="/blogs"
          className={cn(
            "text-sm font-medium hover:underline underline-offset-4",
            path.includes("/blogs") && "underline"
          )}
        >
          Blog
        </Link>
        <Link
          href="/projects"
          className={cn(
            "text-sm font-medium hover:underline underline-offset-4",
            path.includes("/projets") && "underline"
          )}
        >
          Projets
        </Link>
      </nav>
    </header>
  );
}

type HeaderProps = ComponentProps<"header">;
