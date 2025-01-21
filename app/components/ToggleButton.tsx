import React from "react";

type toggleButtonProps = {
  isClick: boolean;
  toggleNavbar: () => void;
};
const ToggleButton: React.FC<toggleButtonProps> = ({
  isClick,
  toggleNavbar,
}) => {
  return (
    <button className="md:hidden block ml-3" onClick={toggleNavbar}>
      {isClick ? (
        // button X
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      ) : (
        // button menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-align-right"
        >
          <path d="M21 12H9" />
          <path d="M21 18H7" />
          <path d="M21 6H3" />
        </svg>
      )}
    </button>
  );
};

export default ToggleButton;
