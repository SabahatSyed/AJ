import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width="17px"
    height="18px"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_415_1063)">
      <Path
        d="M10.0017 10.5017C9.80716 10.7105 9.57256 10.878 9.3119 10.9941C9.05123 11.1102 8.76985 11.1727 8.48452 11.1777C8.1992 11.1828 7.91578 11.1303 7.65118 11.0234C7.38658 10.9165 7.14622 10.7575 6.94443 10.5557C6.74265 10.3539 6.58357 10.1135 6.47669 9.84892C6.36982 9.58432 6.31733 9.3009 6.32236 9.01558C6.3274 8.73025 6.38985 8.44887 6.50599 8.1882C6.62214 7.92754 6.78959 7.69293 6.99837 7.49839M12.7075 13.2076C11.4967 14.1305 10.0223 14.6418 8.50004 14.6667C3.54171 14.6667 0.708374 9.00006 0.708374 9.00006C1.58946 7.35807 2.81151 5.92349 4.29254 4.79256L12.7075 13.2076ZM7.01254 3.50339C7.50011 3.38926 7.99929 3.33222 8.50004 3.33339C13.4584 3.33339 16.2917 9.00006 16.2917 9.00006C15.8617 9.80445 15.349 10.5617 14.7617 11.2596L7.01254 3.50339Z"
        stroke="#3F5065"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M0.708374 1.20837L16.2917 16.7917"
        stroke="#3F5065"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_415_1063">
        <Rect
          width={17}
          height={17}
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
