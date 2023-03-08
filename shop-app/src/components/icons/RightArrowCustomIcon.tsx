import SvgIcon from "@mui/material/SvgIcon";

const RightArrowCustomIcon = (props: any) => {
  return (
    <SvgIcon {...props}>
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.20312 12.4999H15.2031M12.7031 22.4999C18.2261 22.4999 22.7031 18.0229 22.7031 12.4999C22.7031 6.97688 18.2261 2.49988 12.7031 2.49988C7.18013 2.49988 2.70312 6.97688 2.70312 12.4999C2.70312 18.0229 7.18013 22.4999 12.7031 22.4999Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.2031 15.4999L16.2031 12.4999L13.2031 9.49988"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default RightArrowCustomIcon;
