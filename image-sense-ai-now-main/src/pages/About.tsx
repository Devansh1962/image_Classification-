import { Brain, Cpu, Shield, Zap, ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const technicalDetails = [
    {
      icon: Brain,
      title: "ResNet-50 Architecture",
      description: "Built on Microsoft's ResNet-50, a deep convolutional neural network trained on millions of labeled images from ImageNet dataset."
    },
    {
      icon: Cpu,
      title: "WebGPU Acceleration",
      description: "Leverages your device's GPU for lightning-fast inference, providing results in under 3 seconds on modern devices."
    },
    {
      icon: Shield,
      title: "Privacy-First Design",
      description: "All processing happens locally in your browser. No images are sent to external servers, ensuring complete privacy."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Optimized model weights and efficient JavaScript runtime enable instant classification without server roundtrips."
    }
  ];

  const capabilities = [
    "1,000+ object categories including animals, vehicles, household items",
    "Food recognition with detailed cuisine classification",
    "Scene understanding (indoor/outdoor, weather, time of day)",
    "Animal species identification with breed-specific details",
    "Architectural structure and landmark recognition",
    "Sports equipment and activity classification"
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6 gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>

          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold">
              About the <span className="bg-gradient-primary bg-clip-text text-transparent">AI Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our image classification system uses cutting-edge deep learning technology to analyze 
              and identify objects, animals, scenes, and concepts in your photos with remarkable accuracy.
            </p>
          </div>

          {/* How it Works */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Behind the scenes, our AI goes through a sophisticated process to understand your images
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="text-xl font-semibold">Image Processing</h3>
                  <p className="text-muted-foreground">
                    Your image is preprocessed and normalized to match the format 
                    expected by our neural network model.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                  <h3 className="text-xl font-semibold">Feature Extraction</h3>
                  <p className="text-muted-foreground">
                    Deep convolutional layers analyze patterns, textures, shapes, 
                    and spatial relationships within the image.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-success">3</span>
                  </div>
                  <h3 className="text-xl font-semibold">Classification</h3>
                  <p className="text-muted-foreground">
                    The final layers map extracted features to object categories 
                    and generate confidence scores for each prediction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Details */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technical Architecture</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Built with modern web technologies and optimized for performance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {technicalDetails.map((detail, index) => (
                <Card key={index} className="shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                        <detail.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{detail.title}</h3>
                        <p className="text-muted-foreground">{detail.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">What Can It Recognize?</h2>
                <p className="text-lg text-muted-foreground">
                  Our AI model has been trained on diverse datasets and can identify 
                  a wide range of objects, scenes, and concepts with high accuracy.
                </p>
                
                <div className="space-y-3">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="shadow-medium">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="space-y-4">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                      <Brain className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold">Model Statistics</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Layers Deep</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">25M+</div>
                      <div className="text-sm text-muted-foreground">Parameters</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">1.2M+</div>
                      <div className="text-sm text-muted-foreground">Training Images</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">1000+</div>
                      <div className="text-sm text-muted-foreground">Categories</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Open Source */}
          <section className="text-center space-y-8">
            <Card className="bg-gradient-primary shadow-strong">
              <CardContent className="p-12 space-y-6">
                <h2 className="text-3xl font-bold text-primary-foreground">
                  Open Source & Transparent
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
                  This project is built with open source technologies and transparent AI practices. 
                  Explore the code, understand the models, and contribute to making AI more accessible.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="secondary" size="lg" className="gap-2">
                    <Github className="w-5 h-5" />
                    View Source Code
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    <ExternalLink className="w-5 h-5" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}