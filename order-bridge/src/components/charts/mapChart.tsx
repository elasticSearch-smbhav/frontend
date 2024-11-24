"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

interface LocationData {
  name: string;
  lat: number;
  lng: number;
  value: number;
}

interface MapChartProps {
  data: LocationData[];
}

const generateRandomData = (numEntries: number): LocationData[] => {
  const locations = [
    "New York", "London", "Tokyo", "Berlin", "Paris", "Mumbai", "São Paulo",
    "Los Angeles", "Singapore", "Sydney", "Beijing", "Cape Town", "Toronto",
    "Dubai", "Hong Kong", "Mexico City", "Madrid", "Rome", "Bangkok", "Chicago",
    "Seoul", "Buenos Aires", "Moscow", "Cairo", "Lagos", "Jakarta"
  ];

  const latLngs = [
    { lat: 40.7128, lng: -74.0060 }, // New York
    { lat: 51.5074, lng: -0.1278 }, // London
    { lat: 35.6762, lng: 139.6503 }, // Tokyo
    { lat: 52.5200, lng: 13.4050 }, // Berlin
    { lat: 48.8566, lng: 2.3522 }, // Paris
    { lat: 19.0760, lng: 72.8777 }, // Mumbai
    { lat: -23.5505, lng: -46.6333 }, // São Paulo
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 1.3521, lng: 103.8198 }, // Singapore
    { lat: -33.8688, lng: 151.2093 }, // Sydney
    { lat: 39.9042, lng: 116.4074 }, // Beijing
    { lat: -33.9249, lng: 18.4241 }, // Cape Town
    { lat: 43.65107, lng: -79.347015 }, // Toronto
    { lat: 25.276987, lng: 55.296249 }, // Dubai
    { lat: 22.3193, lng: 114.1694 }, // Hong Kong
    { lat: 19.4326, lng: -99.1332 }, // Mexico City
    { lat: 40.4168, lng: -3.7038 }, // Madrid
    { lat: 41.9028, lng: 12.4964 }, // Rome
    { lat: 13.7563, lng: 100.5018 }, // Bangkok
    { lat: 41.8781, lng: -87.6298 }, // Chicago
    { lat: 37.5665, lng: 126.9780 }, // Seoul
    { lat: -34.6037, lng: -58.3816 }, // Buenos Aires
    { lat: 55.7558, lng: 37.6173 }, // Moscow
    { lat: 30.0444, lng: 31.2357 }, // Cairo
    { lat: 6.5244, lng: 3.3792 }, // Lagos
    { lat: -6.2088, lng: 106.8456 }  // Jakarta
  ];

  const data: LocationData[] = [];

  for (let i = 0; i < numEntries; i++) {
    const location = locations[Math.floor(Math.random() * locations.length)];
    const { lat, lng } = latLngs[Math.floor(Math.random() * latLngs.length)];
    
    // Use more general values for `value`, like 1253 or 559 instead of random range
    const value = Math.floor(Math.random() * (1253 - 559 + 1) + 559);  // Random value between 559 and 1253

    data.push({
      name: location,
      lat: lat,
      lng: lng,
      value: value,
    });
  }

  return data;
};

const MapChartComponent = ({ data }: MapChartProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    const randomData = generateRandomData(100);

    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([51.505, -0.09], 2); // Default center

      // Add tile layer for the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Define custom icon for markers
      const customIcon = L.icon({
        iconUrl: '/assets/pin.png', // Replace with your custom marker image URL
        iconSize: [25, 41], // Adjust size as needed
        iconAnchor: [12, 41], // Anchor the icon to the bottom of the marker
        popupAnchor: [1, -34], // Position the popup slightly above the marker
      });

      // Add markers for each location with custom icon
      randomData.forEach((location) => {
        if (mapInstance.current) {
          L.marker([location.lat, location.lng], { icon: customIcon })
            .addTo(mapInstance.current)
            .bindPopup(`<b>${location.name}</b><br>Sales: ₹${location.value.toLocaleString()}`);
        }
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }}></div>;
};

export default MapChartComponent;
