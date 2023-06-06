import React from 'react'

const LocationIcon = (props) => {
    return (
        <svg
          width={22}
          height={22}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M4.813 19.938h12.375M11 11.688a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.875 8.938c0 6.187-6.875 11-6.875 11s-6.875-4.813-6.875-11a6.875 6.875 0 0113.75 0v0z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
}

export default LocationIcon