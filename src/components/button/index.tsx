import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ButtonContainer = styled.button`
  ${tw`bg-primary  rounded-md  text-white hover:bg-[rgba(140, 40, 54, 100%)]`}
`;

const ButtonForCategory = styled.button`
  ${tw`
  bg-primaryFocus
  text-white
  hover:bg-[#dcdcdc]
  hover:text-primary
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

const ButtonForForm = styled.button`
  ${tw`
  px-14
  py-4
  absolute
  -bottom-7
  text-lg
  w-[14rem]
  right-0
  left-0
  ml-auto
  mr-auto
  rounded-lg
  font-bold
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

  if (theme === "form") {
    return <ButtonForForm type="submit">{children}</ButtonForForm>;
  }

  return <ButtonContainer className={className}>{children}</ButtonContainer>;
};
