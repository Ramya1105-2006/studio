import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">Your ultimate movie booking companion.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} BookBuddy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
