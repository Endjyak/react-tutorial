import React from "react";

interface props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}
const Button = ({ color = "primary", children, onClick }: props) => {
  return (
    <div className={"btn" + color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
