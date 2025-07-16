import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ImageUpload } from "@/components/ui/image-upload";
import { ClassificationResult } from "@/components/ui/classification-result";
import { useImageClassification } from "@/hooks/use-image-classification";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Classify() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { predictions, isLoading, classifyImage, reset } = useImageClassification();

  const handleImageSelect = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    await classifyImage(file);
  };

  const handleTryAnother = () => {
    if (selectedImage) {
      URL.revokeObjectURL(selectedImage);
    }
    setSelectedImage(null);
    reset();
  };

  const showResults = predictions.length > 0 && selectedImage;
  const showProcessing = isLoading && selectedImage;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back button */}
          <Button 
            variant="ghost" 
            className="mb-6 gap-2"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>

          {/* Title */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-3xl lg:text-5xl font-bold">
              AI Image <span className="bg-gradient-primary bg-clip-text text-transparent">Classification</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload any image and let our AI identify what it contains with detailed confidence scores
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8">
            {!selectedImage && (
              <Card className="shadow-medium">
                <CardContent className="p-8">
                  <ImageUpload 
                    onImageSelect={handleImageSelect}
                    disabled={isLoading}
                  />
                </CardContent>
              </Card>
            )}

            {(showProcessing || showResults) && selectedImage && (
              <ClassificationResult
                image={selectedImage}
                predictions={predictions}
                onTryAnother={handleTryAnother}
                processing={isLoading}
              />
            )}
          </div>

          {/* Tips */}
          {!selectedImage && (
            <div className="mt-12 text-center">
              <Card className="bg-muted/30 shadow-soft">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">💡 Tips for Best Results</h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• Use clear, well-lit images for better accuracy</p>
                    <p>• Center the main subject in the frame</p>
                    <p>• Higher resolution images work better</p>
                    <p>• Works best with common objects, animals, and scenes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}