const axios = require('axios');
const captainModel = require("../models/captain.model")

module.exports.getAddressCoordinates = async(address)=>{

    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }

}

module.exports.getDistanceTime = async(origin,destination) =>{
    if(!origin || !destination) {
        throw new Error('origin and destination are required')
    }
    const apiKey = process.env.GOOGLE_MAPS_API
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    try{
        const response = await axios.get(url)
        if(response.data.status === 'OK'){
            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No routes found')
            }
            const element = response.data.rows[0].elements[0];
            return {
                distance: element.distance,
                duration: element.duration
            };
        } else {
            throw new Error('Unable to fetch distance and time')
        }
    } catch(err){
        throw err
    }
}

module.exports.getAutoCompleteSuggestions = async(input) => {
    if (!input) {
        throw new Error('query is required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error('Unable to fetch autocomplete suggestions');
        }
    } catch (error) {
        throw error;
    }
}

module.exports.getCaptainInTheRadius = async (ltd,lng,radius)=>{
    const captains = await captainModel.find({
        location : {
            $geoWithin : {
                $centerSphere : [[ltd,lng],radius/6371]
            }
        }
    })
    return captains
}