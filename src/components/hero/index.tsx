import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";

const Container = styled.div`
  ${tw`    
  w-[86rem]
  mt-4
`}
`;

const Logo = styled.div`
  ${tw`    
  relative
`}
`;


export default function Hero() {
  return (
      <Container>
        <Logo>
            <Button className="top-[22rem] left-52" theme={"category"}>Вызвать мастера</Button>
            <img src="./assets/images/Logo.jpg" />
            </Logo>
      </Container>
  );
}
