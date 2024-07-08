import { ComponentPropsWithoutRef } from "react";

export function BrasilIcon(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <clipPath id="a">
          <path
            fill-opacity=".7"
            d="M177.5 0h177.5v355H177.5z"
            transform="scale(1.44)"
          />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#a)"
        transform="translate(-256) scale(1.44)"
        stroke-width="1pt"
      >
        <path fill="#009739" d="M0 0h512v355H0z" />
        <path fill="#ffde00" d="m256 0 256 177.5-256 177.5L0 177.5 256 0z" />
        <path
          fill="#002776"
          d="M166.8 177.5a89.2 89.2 0 1 1 178.4 0 89.2 89.2 0 0 1-178.4 0z"
        />
        <path
          fill="#fff"
          d="m114.6 166.8 16.1 5.4-9.9 15.1 18-2.8-3.8 18.6 14.3-11.6 10.7 14.3 7.6-16.7 7.6 16.7 10.7-14.3 14.3 11.6-3.8-18.6 18 2.8-9.9-15.1 16.1-5.4-16.1-5.4 9.9-15.1-18 2.8 3.8-18.6-14.3 11.6-10.7-14.3-7.6 16.7-7.6-16.7-10.7 14.3-14.3-11.6 3.8 18.6-18-2.8 9.9 15.1-16.1 5.4z"
        />
      </g>
    </svg>
  );
}
