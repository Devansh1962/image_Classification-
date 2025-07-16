import { Brain, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/')}
        >
          <div className="p-1.5 rounded-lg bg-gradient-primary">
            <Brain className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">AI Classifier</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button
            variant={isActive('/') ? 'default' : 'ghost'}
            onClick={() => navigate('/')}
            className="font-medium"
          >
            Home
          </Button>
          <Button
            variant={isActive('/classify') ? 'default' : 'ghost'}
            onClick={() => navigate('/classify')}
            className="font-medium"
          >
            Classify
          </Button>
          <Button
            variant={isActive('/about') ? 'default' : 'ghost'}
            onClick={() => navigate('/about')}
            className="font-medium"
          >
            About
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden md:flex gap-2">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}