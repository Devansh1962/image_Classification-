import { Heart, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">AI Image Classifier</h3>
            <p className="text-muted-foreground text-sm">
              Discover what AI sees in your images with instant, accurate classification
              powered by machine learning.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Button variant="link" className="justify-start p-0 h-auto font-normal">
                How it Works
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto font-normal">
                Privacy Policy
              </Button>
              <Button variant="link" className="justify-start p-0 h-auto font-normal">
                Terms of Service
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 AI Image Classifier. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}