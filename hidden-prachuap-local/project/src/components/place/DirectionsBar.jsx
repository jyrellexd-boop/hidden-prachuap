import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function DirectionsBar({ mapsUrl, placeName }) {
  const handleDirections = () => {
    // Use current location for navigation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          window.open(mapsUrl, '_blank');
        },
        () => {
          // Fallback: open maps anyway
          window.open(mapsUrl, '_blank');
        }
      );
    } else {
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl border-t border-border/50 p-4 md:hidden">
      <Button
        onClick={handleDirections}
        className="w-full h-13 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full text-base gap-2"
      >
        <Navigation className="w-5 h-5" />
        Get Directions
      </Button>
    </div>
  );
}