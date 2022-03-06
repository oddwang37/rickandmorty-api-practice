import * as React from 'react';
import { SVGProps } from 'react';

const SvgSpinner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{
      margin: 'auto',
      background: '#141414 0 0',
      display: 'block',
      shapeRendering: 'auto',
      animationPlayState: 'running',
      animationDelay: '0s',
    }}
    width={200}
    height={200}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    {...props}>
    <circle
      cx={50}
      cy={50}
      fill="none"
      stroke="#fff"
      strokeWidth={10}
      r={35}
      strokeDasharray="164.93361431346415 56.97787143782138"
      style={{
        animationPlayState: 'running',
        animationDelay: '0s',
      }}>
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

export default SvgSpinner;
