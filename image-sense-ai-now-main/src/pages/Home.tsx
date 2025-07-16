import { ArrowRight, Zap, Shield, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";

export default function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get accurate classifications in seconds with our optimized AI models"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your images are processed locally in your browser - nothing leaves your device"
    },
    {
      icon: Smartphone,
      title: "Works Everywhere",
      description: "Use on any device - desktop, tablet, or mobile with camera support"
    },
    {
      icon: Brain,
      title: "Smart AI",
      description: "Powered by state-of-the-art machine learning models trained on millions of images"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Classify Any Image in{" "}
                    <span className="bg-gradient-primary bg-clip-text text-transparent">
                      Seconds
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-xl">
                    Upload a photo and instantly discover what the AI sees. 
                    From animals to objects, our smart classification gives you 
                    accurate results in real-time.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-6 bg-gradient-primary hover:bg-gradient-accent shadow-soft"
                    onClick={() => navigate('/classify')}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="text-lg px-8 py-6"
                    onClick={() => navigate('/about')}
                  >
                    Learn More
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex gap-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Object Classes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">95%+</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">&lt;3s</div>
                    <div className="text-sm text-muted-foreground">Processing Time</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-float">
                <div className="relative rounded-2xl overflow-hidden shadow-strong">
                  <img 
                    src={heroImage} 
                    alt="AI analyzing images" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 p-3 bg-success rounded-full shadow-medium animate-pulse">
                  <Brain className="w-6 h-6 text-success-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 p-3 bg-accent rounded-full shadow-medium animate-pulse delay-300">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Why Choose Our AI Classifier?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Built with the latest technology to give you the best image classification experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
                Ready to See What AI Sees?
              </h2>
              <p className="text-xl text-primary-foreground/80">
                Upload your first image and experience the magic of AI-powered classification
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6 bg-background hover:bg-background/90 text-foreground shadow-soft"
                onClick={() => navigate('/classify')}
              >
                Start Classifying Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}