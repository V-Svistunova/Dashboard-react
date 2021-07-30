import React from 'react';
import IconsSVG from './icons.svg';

function Icons({name, color, sizeW, sizeH, className}) {

  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} width={sizeW} height={sizeH}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

export default Icons;