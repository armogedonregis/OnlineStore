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

const TextContainer = styled.div`
  ${tw`  
  absolute
  top-[18rem]
  left-36 
  h-[10.2rem]
`}
`;

const Mask = styled.div`
  ${tw`  
  absolute
  top-[16rem]
  left-24
  w-[35rem]
  h-[16.28rem]
  bg-white
  opacity-80
`}
`;

const Title = styled.div`
  ${tw`    
  text-2xl
  text-black
  font-bold
  mb-4
`}
`;

const Text = styled.div`
  ${tw`    
  w-5/12
  text-black
  mb-8
`}
`;

export default function Hero() {
  return (
      <Container>
        <Logo>
          <Mask />
          <TextContainer>
            <Title>Заказать мастера очень легко</Title>
            <Text>Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание Описание</Text>
            <Button className="left-60 bg-gray" theme={"category"}>Подробнее</Button>
            <Button className="bg-primaryFocus" theme={"category"}>Вызвать мастера</Button>
          </TextContainer>
          <img src="./assets/images/Logo.jpg" />
        </Logo>
      </Container>
  );
}
