import React from 'react';

const LocationContext = React.createContext({
    location: [],
    loading: false,
    error: null
})

export default LocationContext;
