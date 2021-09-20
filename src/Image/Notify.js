import React from 'react';

export const Notify = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 60.5C36.025 60.5 38.5 58.025 38.5 55H27.5C27.5 58.025 29.9475 60.5 33 60.5ZM49.5 44V30.25C49.5 21.8075 44.99 14.74 37.125 12.87V11C37.125 8.7175 35.2825 6.875 33 6.875C30.7175 6.875 28.875 8.7175 28.875 11V12.87C20.9825 14.74 16.5 21.78 16.5 30.25V44L11 49.5V52.25H55V49.5L49.5 44Z"
        fill="black"
      />
    </svg>
  );
};
