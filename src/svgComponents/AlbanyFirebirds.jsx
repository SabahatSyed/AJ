import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={129}
    height={80}
    viewBox="0 0 129 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={129} height={80} fill="url(#pattern0)" />
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_415_2760"
          transform="matrix(0.000603264 0 0 0.000972763 0.0668567 0)"
        />
      </Pattern>
      <Image
        id="image0_415_2760"
        width={1436}
        height={1028}
      />
    </Defs>
  </Svg>
);
export default SVGComponent;