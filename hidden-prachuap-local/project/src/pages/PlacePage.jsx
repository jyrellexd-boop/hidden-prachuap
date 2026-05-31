import { useParams, Navigate } from 'react-router-dom';
import { places } from '@/lib/placesData';
import { Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlaceHero from '@/components/place/PlaceHero';
import PhotoGallery from '@/components/place/PhotoGallery';
import HighlightsSection from '@/components/place/HighlightsSection';
import DirectionsBar from '@/components/place/DirectionsBar';

export default function PlacePage() {
  const { id } = useParams();
  const place = places.find(p => p.id === id);

  if (!place) return <Navigate to="/" replace />;

  return (
    <div className="pb-24 md:pb-0">
      <PlaceHero place={place} />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
        {/* Description */}
        <div>
          <h2 className="font-heading font-bold text-2xl mb-4">About this Place</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{place.description}</p>
          
          {/* Desktop directions button */}
          <div className="hidden md:block mt-8">
            <Button
              onClick={() => window.open(place.mapsUrl, '_blank')}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8 gap-2"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </Button>
          </div>
        </div>

        {/* Gallery */}
        <PhotoGallery images={place.gallery} placeName={place.name} />

        {/* Highlights */}
        <HighlightsSection highlights={place.highlights} />
      </div>

      {/* Sticky mobile directions bar */}
      <DirectionsBar mapsUrl={place.mapsUrl} placeName={place.name} />
    </div>
  );
}