import { FC } from "react";

type Props = {
  className?: string;
};

const VNFlagIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <circle cx="256" cy="256" r="256" fill="#d80027" />
      <path
        fill="#ffda44"
        d="M256 133.565l27.628 85.029h89.405l-72.331 52.55 27.628 85.03L256 303.623l-72.33 52.551 27.628-85.03-72.33-52.55h89.404z"
      />
    </svg>
  );
};

export default VNFlagIcon;
