import React from 'react';

export const Slide = React.memo(({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.25 49.5H57.75V44H8.25V49.5ZM8.25 35.75H57.75V30.25H8.25V35.75ZM8.25 16.5V22H57.75V16.5H8.25Z"
        fill="#6200EE"
      />
    </svg>
  );
});
