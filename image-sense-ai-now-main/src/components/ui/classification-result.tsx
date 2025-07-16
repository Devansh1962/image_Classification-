import { CheckCircle, Zap, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface Prediction {
  label: string;
  score: number;
}

interface ClassificationResultProps {
  image: string;
  predictions: Prediction[];
  onTryAnother: () => void;
  processing?: boolean;
}

export function ClassificationResult({ 
  image, 
  predictions, 
  onTryAnother, 
  processing = false 
}: ClassificationResultProps) {
  // Guard against empty predictions
  if (!processing && (!predictions || predictions.length === 0)) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-destructive">Classification Failed</h2>
          <p className="text-muted-foreground">Unable to process your image. Please try again.</p>
          <Button onClick={onTryAnother} className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Try Another Image
          </Button>
        </div>
      </div>
    );
  }

  const topPrediction = predictions[0];
  const confidence = topPrediction ? Math.round(topPrediction.score * 100) : 0;

  if (processing) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <h2 className="text-xl font-semibold">AI is analyzing your image...</h2>
          </div>
          <div className="w-24 h-1 bg-gradient-primary animate-gradient rounded-full mx-auto" />
        </div>
        
        <Card className="overflow-hidden">
          <div className="aspect-video relative">
            <img 
              src={image} 
              alt="Analyzing" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <CheckCircle className="w-6 h-6 text-success" />
          <h2 className="text-2xl font-bold">Classification Complete!</h2>
        </div>
        <p className="text-muted-foreground">Here's what the AI identified in your image</p>
      </div>

      {/* Image Preview */}
      <Card className="overflow-hidden shadow-medium">
        <div className="aspect-video relative">
          <img 
            src={image} 
            alt="Classified image" 
            className="w-full h-full object-cover"
          />
        </div>
      </Card>

      {/* Main Result */}
      <Card className="shadow-soft">
        <CardContent className="p-6 space-y-4">
          <div className="text-center space-y-2">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Primary Detection
            </Badge>
            <h3 className="text-3xl font-bold text-primary capitalize">
              {topPrediction.label.replace(/_/g, ' ')}
            </h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Confidence Score</p>
              <div className="space-y-1">
                <Progress value={confidence} className="h-3" />
                <p className="text-2xl font-bold text-success">{confidence}%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Predictions */}
      {predictions.length > 1 && (
        <Card className="shadow-soft">
          <CardContent className="p-6 space-y-4">
            <h4 className="font-semibold text-lg">Other Possibilities</h4>
            <div className="space-y-3">
              {predictions.slice(1, 4).map((prediction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="capitalize font-medium">
                    {prediction.label.replace(/_/g, ' ')}
                  </span>
                  <div className="flex items-center gap-2">
                    <Progress 
                      value={prediction.score * 100} 
                      className="w-20 h-2" 
                    />
                    <span className="text-sm font-medium w-10 text-right">
                      {Math.round(prediction.score * 100)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex justify-center">
        <Button 
          onClick={onTryAnother}
          size="lg"
          className="gap-2 bg-gradient-primary hover:bg-gradient-accent"
        >
          <RotateCcw className="w-4 h-4" />
          Try Another Image
        </Button>
      </div>
    </div>
  );
}