import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, AlertCircle } from 'lucide-react';

const MapboxMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const initializeMap = (token: string) => {
    if (!mapContainer.current || !token) return;

    setIsLoading(true);
    
    try {
      mapboxgl.accessToken = token;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [75.8577, 22.7196], // Indore coordinates
        zoom: 15,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add marker for business location
      const marker = new mapboxgl.Marker({
        color: '#1a1a1a',
        scale: 1.2
      })
        .setLngLat([75.8577, 22.7196])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 })
            .setHTML(`
              <div class="p-3">
                <h3 class="font-bold text-lg mb-2">Paras Sales Corporation</h3>
                <p class="text-sm text-gray-600 mb-2">9, Khatipura Main Road<br>Madhu's Pravesh, Indore<br>Madhya Pradesh - 452007</p>
                <p class="text-sm"><strong>Phone:</strong> +91 83494 94982</p>
                <p class="text-sm"><strong>Hours:</strong> 12:00 PM - 8:00 PM</p>
              </div>
            `)
        )
        .addTo(map.current);

      map.current.on('load', () => {
        setIsLoading(false);
        setShowTokenInput(false);
      });

      map.current.on('error', () => {
        setIsLoading(false);
        setShowTokenInput(true);
      });

    } catch (error) {
      console.error('Error initializing map:', error);
      setIsLoading(false);
      setShowTokenInput(true);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="w-full h-96 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Enable Interactive Map</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-amber-800">
                <p className="font-medium mb-1">Mapbox Token Required</p>
                <p>Get your free public token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline font-medium">mapbox.com</a></p>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="mapbox-token" className="text-sm font-medium">
                Mapbox Public Token
              </label>
              <Input
                id="mapbox-token"
                type="text"
                placeholder="pk.eyJ1IjoieW91ci11c2VybmFtZSI..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="font-mono text-xs"
              />
            </div>
            
            <Button 
              onClick={handleTokenSubmit}
              disabled={!mapboxToken.trim() || isLoading}
              className="w-full"
            >
              {isLoading ? 'Loading Map...' : 'Load Interactive Map'}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              Your token is only used locally and not stored anywhere
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
      <div ref={mapContainer} className="absolute inset-0" />
      {isLoading && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">Loading interactive map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapboxMap;