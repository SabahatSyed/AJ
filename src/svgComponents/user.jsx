import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={17}
    height={21}
    viewBox="0 0 17 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.7405 17.114C16.7405 20.5973 11.9635 21 8.3713 21L8.11423 20.9998C5.82556 20.9942 0 20.8497 0 17.0928C0 13.6805 4.58498 13.2245 8.14987 13.2073L8.62835 13.207C10.9169 13.2126 16.7405 13.3571 16.7405 17.114ZM8.3713 0C11.4657 0 13.9821 2.51741 13.9821 5.61187C13.9821 8.70632 11.4657 11.2227 8.3713 11.2227H8.33748C5.24937 11.2132 2.74781 8.69469 2.75834 5.60869C2.75834 2.51741 5.27579 0 8.3713 0Z"
      fill="#002D62"
    />
  </Svg>
);
export default SVGComponent;
