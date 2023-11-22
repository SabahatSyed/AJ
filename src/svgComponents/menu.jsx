import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={24}
    height={16}
    viewBox="0 0 24 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.401123 15.48H23.6211V12.9H0.401123V15.48ZM0.401123 9.03H23.6211V6.45H0.401123V9.03ZM0.401123 0V2.58H23.6211V0H0.401123Z"
      fill="#002D62"
    />
  </Svg>
);
export default SVGComponent;
