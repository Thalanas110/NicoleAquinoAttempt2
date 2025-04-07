import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm py-4 px-6 md:px-8 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl md:text-3xl font-semibold text-primary cursor-pointer">
            Operation Nicole Aquino
          </h1>
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme} 
          className="rounded-full hover:bg-neutral focus:outline-none"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-primary" />
          )}
        </Button>
      </div>
    </header>
  );
}
