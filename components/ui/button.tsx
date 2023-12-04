"use client";
import { Spinner } from "./spinner";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { children, isLoading, ...other } = props;
  return (
    <button
      disabled={isLoading}
      className={`w-full text-sm font-bold px-4 py-2 rounded-md text-black bg-yellow-500 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      {...other}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};
