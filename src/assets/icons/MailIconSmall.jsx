import React from 'react'

const MailIconSmall = (props) => {
    return (
        <svg
          width={22}
          height={22}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M2.75 4.813h16.5V16.5a.687.687 0 01-.688.688H3.438a.687.687 0 01-.687-.688V4.812z"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.25 4.813L11 12.375 2.75 4.812"
            stroke="#000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
}

export default MailIconSmall