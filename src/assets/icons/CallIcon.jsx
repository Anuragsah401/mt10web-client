import React from 'react'

const CallIcon = (props) => {
    return (
        <svg
          width={22}
          height={22}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M13.698 3.438a6.884 6.884 0 014.864 4.864M12.985 6.093a4.116 4.116 0 012.922 2.922M7.95 10.725a7.184 7.184 0 003.35 3.343.688.688 0 00.68-.052l2.148-1.435a.678.678 0 01.653-.06l4.022 1.727a.679.679 0 01.413.714 4.124 4.124 0 01-4.091 3.6A11.687 11.687 0 013.437 6.876a4.125 4.125 0 013.601-4.09.679.679 0 01.714.412l1.727 4.03a.688.688 0 01-.052.645l-1.435 2.183a.687.687 0 00-.043.67v0z"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }


export default CallIcon