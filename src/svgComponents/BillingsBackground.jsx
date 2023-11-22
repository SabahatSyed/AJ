import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={347}
    height={124}
    viewBox="0 0 347 124"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={347}
      height={124}
      rx={14}
      transform="matrix(1 0 0 -1 0 124)"
      fill="url(#paint0_linear_415_2746)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_415_2746"
        x1={287}
        y1={18}
        x2={71}
        y2={80}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#00152D" />
        <Stop offset={1} stopColor="#043274" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SVGComponent;
