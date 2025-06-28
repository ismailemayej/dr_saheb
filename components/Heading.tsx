import React from "react";
import type { JSX } from "react";

interface Heading {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  center?: boolean;
  bold?: boolean;
}

const Heading: React.FC<Heading> = ({
  level = 1,
  children,
  className = "",
  center = false,
  bold = true,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  const baseStyle = `text-black dark:text-white bangla-bold ${
    center ? "text-center" : "text-start"
  } ${bold ? "font-bold" : "font-medium"}`;

  const sizeStyle = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
    4: "text-xl md:text-2xl",
    5: "text-lg md:text-xl",
    6: "text-base md:text-lg",
  }[level];

  return (
    <Tag className={`${baseStyle} ${sizeStyle} ${className}`}>{children}</Tag>
  );
};

export default Heading;
