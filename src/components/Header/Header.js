import {
  SearchIcon,
} from "@heroicons/react/outline";
import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

function Header({setCoords}) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoords({ lat, lng });
  };
 
  return (
    <header className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 px-4 shadow-md">
      <div className="flex">
        <div className="font-bold text-3xl">
          Travex
        </div>
      </div>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>      
        <div className="flex items-center justify-end flex-grow">
          <div className="hidden md:inline-flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input
              className="hidden lg:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink"
              placeholder="Search Stuffs"
            />
          </div>
        </div>
      </Autocomplete>
    </header>
  );
}

export default Header;
