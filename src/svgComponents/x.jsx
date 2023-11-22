import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0.764433 0.308929L8.78765 11.7707L0.713867 21.0897H2.5311L9.59984 12.9306L15.311 21.0897H21.4946L13.0198 8.98333L20.5349 0.308929H18.7177L12.208 7.82307L6.9481 0.308929H0.764433ZM3.43675 1.73895H6.27749L18.822 19.6597H15.9812L3.43675 1.73895Z"
      fill={props.menuScreen ? "#C90016":'black' }
    />
  </Svg>
);
export default SVGComponent;
