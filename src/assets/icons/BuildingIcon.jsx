const BuildingIcon = ({props}) => {
  return (
    <svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.75 23.625h24.5M15.75 23.625V4.375a.875.875 0 00-.875-.875h-10.5a.875.875 0 00-.875.875v19.25M24.5 23.625v-12.25a.875.875 0 00-.875-.875H15.75M7 7.875h3.5M8.75 14.875h3.5M7 19.25h3.5M19.25 19.25H21M19.25 14.875H21"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BuildingIcon