import React from "react"
import { Map, Marker } from "pigeon-maps"


const MapC = () => {

    const newYorkCoordinates = [40.73061, -73.935242];
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-5xl  text-center my-5 font-bold">Building Location</h1>
            <Map height={300} defaultCenter={newYorkCoordinates} defaultZoom={18}>
                <Marker position={newYorkCoordinates} />
            </Map>
        </div>
    )
};

export default MapC;