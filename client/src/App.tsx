import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import PoemDetail from "@/pages/PoemDetail";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/poem/:id" component={PoemDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`min-h-screen font-poppins ${isDarkMode ? 'dark' : ''}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <main className="container mx-auto px-4 py-8 md:px-8 min-h-[calc(100vh-200px)]">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
