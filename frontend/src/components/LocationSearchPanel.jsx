
import React from 'react';

const LocationSearchPanel = ({ suggestions, handleSuggestionClick }) => {
    return (
        <div className='p-3 mt-12'>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li
                        key={index}
                        className='flex items-center p-2 cursor-pointer hover:bg-gray-200 border-gray-300'
                        onClick={() => handleSuggestionClick(suggestion)}
                    >
                        <i className="ri-map-pin-line text-xl mr-2 text-gray-600"></i>
                        <span>{suggestion.description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
            
export default LocationSearchPanel;