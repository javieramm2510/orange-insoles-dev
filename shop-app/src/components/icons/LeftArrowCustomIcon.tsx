import SvgIcon from "@mui/material/SvgIcon";

const LeftArrowCustomIcon = (props: any) => {
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
          d="M15.9648 12.3323L9.96484 12.3323M12.4648 2.33228C6.94184 2.33228 2.46484 6.80928 2.46484 12.3323C2.46484 17.8553 6.94184 22.3323 12.4648 22.3323C17.9878 22.3323 22.4648 17.8553 22.4648 12.3323C22.4648 6.80928 17.9878 2.33228 12.4648 2.33228Z"
          stroke="#E68A3F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9648 9.33228L8.96484 12.3323L11.9648 15.3323"
          stroke="#E68A3F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};

export default LeftArrowCustomIcon;
