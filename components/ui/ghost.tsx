"use client";

interface IGhostProps extends React.HTMLAttributes<HTMLDivElement> {
  width: string;
  height: string;
}

export const Ghost = (props: IGhostProps) => {
  const { width, height, ...other } = props;
  return (
    <div
      className={`w-${width} h-${height} animate-pulse bg-gray-800 transition-all duration-1000 rounded-sm`}
      {...other}
    />
  );
};
