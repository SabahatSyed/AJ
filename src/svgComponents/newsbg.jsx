import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={390}
    height={319}
    viewBox="0 0 390 319"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={390} height={319} fill="url(#pattern0)" />
    <Rect width={390} height={319} fill="black" fillOpacity={0.7} />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_415_1360"
          transform="matrix(0.000958908 0 0 0.00117233 -0.113701 0)"
        />
      </Pattern>
      <Image
        id="image0_415_1360"
        width={1280}
        height={853}
      />
    </Defs>
  </Svg>
);
export default SVGComponent;