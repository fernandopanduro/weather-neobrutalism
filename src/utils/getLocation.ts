import { useEffect, useState } from "react";

interface LocationData {
  county: string | null;
}

const getLocation = () => {
  const [locationData, setLocationData] = useState<LocationData>({
    county: null,
  });

  useEffect(() => {
    const successCallback = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

      fetch(url)
        .then(res => res.json())
        .then(data => setLocationData({ county: data.address.county }))
        .catch(error => console.error("Error fetching location:", error));
    };

    const errorCallback = (error: GeolocationPositionError) => {
      console.error("Error getting location:", error.message);
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(
      successCallback,
      errorCallback,
      options
    );
  }, []);

  return locationData;
};

export default getLocation;
