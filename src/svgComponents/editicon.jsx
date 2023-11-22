import * as React from "react";
import Svg, { G, Circle, Path, Defs, ClipPath, Rect } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SVGComponent = (props) => (
  <Svg
    width={39}
    height={39}
    viewBox="0 0 39 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_900_382)">
      <Circle cx={19.5} cy={15.5} r={15.5} fill="#002D62" />
      <G clipPath="url(#clip0_900_382)">
        <Path
          d="M21.1308 13.1408L21.8592 13.8692L14.6867 21.0417H13.9583V20.3133L21.1308 13.1408ZM23.9808 8.375C23.7829 8.375 23.5771 8.45417 23.4267 8.60458L21.9779 10.0533L24.9467 13.0221L26.3954 11.5733C26.7042 11.2646 26.7042 10.7658 26.3954 10.4571L24.5429 8.60458C24.3846 8.44625 24.1867 8.375 23.9808 8.375ZM21.1308 10.9004L12.375 19.6562V22.625H15.3438L24.0996 13.8692L21.1308 10.9004Z"
          fill="white"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="clip0_900_382">
        <Rect width={19} height={19} fill="white" transform="translate(10 6)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
