import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "wouter";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  return (
    <header className="content-overlay py-4 px-6 md:px-8 sticky top-0 z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-bold text-soft-green dark:text-soft-green cursor-pointer">
            For my babyy Nicole :DD
          </h1>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme} 
          className="rounded-full hover:bg-light-beige/40 focus:outline-none transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-soft-green" />
          ) : (
            <Moon className="h-5 w-5 text-soft-green" />
          )}
        </Button>
      </div>
    </header>
  );
}
