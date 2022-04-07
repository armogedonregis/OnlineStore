import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`  
  mt-20
  w-full
  bg-blackBg
  h-[14rem]
`}
`;

const Baground = styled.div`
  ${tw`  
  flex
  justify-around
`}
`;

const TitleContainer = styled.div`
  ${tw`  
`}
`;

const Phone = styled.button`
  ${tw`  
  flex
`}
`;

const Mail = styled.button`
  ${tw`  
`}
`;

const IconContainer = styled.div`
  ${tw`  
  flex
`}
`;

const Title = styled.div`
  ${tw`  
`}
`;

export default function Footer() {
  return (
      <Container>
          <Baground>
            <TitleContainer> Наши контакты
                <Phone> <img width="25px" height="25px" src="./assets/vector/phone.svg" />8-800-800-80-80</Phone>
                <Mail>asrsdrsdr@gmail.com</Mail>
            </TitleContainer>
            <Title> Оставайтесь на связи
                <IconContainer>
                    <img src="./assets/vector/whatsapp.svg" width="25px" height="25px" />
                    <img src="./assets/vector/viber.svg" width="25px" height="25px" />
                </IconContainer>
            </Title>
          </Baground>
      </Container>
  );
}
