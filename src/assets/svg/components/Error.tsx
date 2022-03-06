import * as React from 'react';
import { SVGProps } from 'react';

const SvgError = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" xmlSpace="preserve" {...props}>
    <path
      d="M500 10C229.4 10 10 229.4 10 500s219.4 490 490 490 490-219.4 490-490S770.6 10 500 10zm252 787.9c-15.4 12.9-38.3 11-51.3-4.2L506.5 564.3 312.4 793.7c-13 15.3-35.9 17.2-51.3 4.2-15.3-12.9-17.2-35.9-4.3-51.2L458.9 508l-202-238.7c-13-15.3-11.1-38.3 4.2-51.3s38.2-11 51.2 4.3l194.2 229.4 194.2-229.4c12.9-15.3 35.9-17.2 51.2-4.3 15.3 13 17.2 35.9 4.3 51.3L554.1 508l202.1 238.7c13 15.3 11.1 38.3-4.2 51.2z"
      fill="#fff"
    />
  </svg>
);

export default SvgError;
