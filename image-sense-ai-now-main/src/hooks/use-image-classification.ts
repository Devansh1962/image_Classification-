import { useState, useCallback } from 'react';
import { pipeline } from '@huggingface/transformers';
import { useToast } from '@/hooks/use-toast';

interface Prediction {
  label: string;
  score: number;
}

interface UseImageClassificationReturn {
  predictions: Prediction[];
  isLoading: boolean;
  error: string | null;
  classifyImage: (imageFile: File) => Promise<void>;
  reset: () => void;
}

export function useImageClassification(): UseImageClassificationReturn {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const classifyImage = useCallback(async (imageFile: File) => {
    setIsLoading(true);
    setError(null);
    setPredictions([]);

    try {
      // Create the classification pipeline with EfficientNet for high accuracy
      const classifier = await pipeline(
        'image-classification',
        'onnx-community/efficientnet-lite4',
        { device: 'webgpu' }
      );

      // Create image URL for the classifier
      const imageUrl = URL.createObjectURL(imageFile);
      
      // Get predictions
      const results = await classifier(imageUrl);
      
      // Clean up the object URL
      URL.revokeObjectURL(imageUrl);

      // Format results
      const formattedPredictions = results.map((result: any) => ({
        label: result.label,
        score: result.score
      }));

      setPredictions(formattedPredictions);
      
      toast({
        title: "Classification Complete!",
        description: `Identified as: ${formattedPredictions[0]?.label}`,
      });

    } catch (err) {
      console.error('Classification error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to classify image';
      setError(errorMessage);
      
      toast({
        title: "Classification Failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  const reset = useCallback(() => {
    setPredictions([]);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    predictions,
    isLoading,
    error,
    classifyImage,
    reset
  };
}
