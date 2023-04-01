// import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';

// function Header() {
//   return (
//     <div>
//         Header
//     </div>
//   )
// }

// export default Header

import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

function Header() {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autocomplete) => {
    setAutocomplete(autocomplete);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      console.log(autocomplete.getPlace());
      // Do something with the selected place
    } else {
      console.log('Autocomplete is not loaded yet!');
    }
  };

  return (
    <div>
        <div>
            Header
        </div>

        <div style={{ position: 'absolute', top: 0, right: 0 }}>
            {/* <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            > */}
                <input
                type="text"
                placeholder="Search address..."
                style={{
                    boxSizing: `border-box`,
                    border: `1px solid transparent`,
                    width: `240px`,
                    height: `32px`,
                    padding: `0 12px`,
                    borderRadius: `3px`,
                    boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                    fontSize: `14px`,
                    outline: `none`,
                    textOverflow: `ellipses`,
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}
                />
            {/* </Autocomplete> */}
        </div>
    </div>
  );
}

export default Header;
