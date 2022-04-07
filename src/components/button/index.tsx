import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`bg-primary  rounded-md  text-white hover:bg-[rgba(140, 40, 54, 100%)]`}
`;

const ButtonForCategory = styled.button`
  ${tw`
  text-white
  hover:bg-[#dcdcdc]
  hover:text-black
  mr-16
  w-2/12
  rounded-lg
  px-2
  h-[3rem]
  font-bold
  absolute
  uppercase
  `}
`;

const ButtonForOption = styled.button`
  ${tw`
  text-[#A2A2A2]
  hover:underline
  font-bold
  hover:text-black
  text-left
  text-2xl
  mb-8
  `}
`;


export const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  theme?: string;
}> = ({ children, className, theme = "default" }) => {
  if (theme === "category") {
    return <ButtonForCategory className={className}>{children}</ButtonForCategory>;
  }

  if (theme === "option") {
    return <ButtonForOption className={className}>{children}</ButtonForOption>;
  }

  return <ButtonContainer className={className}>{children}</ButtonContainer>;
};
