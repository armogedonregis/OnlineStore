import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";

const Container = styled.div`
  ${tw`  
  text-black  
  mt-20
  relative
`}
`;


const Header = styled.div`
  ${tw`   
  font-bold
  text-3xl
  w-1/3 
  mb-4
`}
`;

const Descr = styled.div`
  ${tw`    
  text-[#404040]
  text-xl
  mb-20
  w-1/2
`}
`;

const Content = styled.div`
  ${tw`
  flex
  justify-between
`}
`;

const ButtonContainer = styled.div`
  ${tw`    
  flex
  flex-col
`}
`;

const Text = styled.div`
  ${tw`   
  text-xl
  mb-6
  font-bold
  text-[#101010]
`}
`;

const ImageContainer = styled.div`
  ${tw` 
  flex   
`}
`;


export default function Features() {
  return (
      <Container>
          <Header>У нас вы найдете плитку для любого решения</Header>
          <Descr>Экслюзивные коллекции плитки для дома и коммерческих помещений на любой вкус</Descr>
          <Content>
              <ButtonContainer>
                  <Text>Выберите тип плитки</Text>
                  <Button theme="option">Плитка для ванной</Button>
                  <Button theme="option">Плитка для кухни</Button>
                  <Button theme="option">Плитка для стен</Button>
                  <Button theme="option">Плитка для пола</Button>
                  <Button theme="option">Мозайка</Button>
                  <Button theme="option">Плитка для ванной</Button>
              </ButtonContainer>
              <ImageContainer>
                  <img className="mr-6" width="300px" height="300px" src="./assets/images/image1.png" />
                  <img width="300px" height="300px" src="./assets/images/image2.png" />
              </ImageContainer>
          </Content>
      </Container>
  );
}
