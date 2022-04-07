import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`    
  mt-20
`}
`;

const Title = styled.div`
  ${tw`   
  text-black
  font-bold
  text-3xl
  w-[22rem]
  leading-none
`}
`;

const Content = styled.div`
  ${tw`    
  mt-10
  flex
  justify-between
`}
`;


const TextContainer = styled.div`
  ${tw`    
  w-5/12
`}
`;


const Text = styled.div`
  ${tw`   
  text-black 
  my-4
  text-xl
  font-bold
`}
`;


const Descr = styled.div`
  ${tw`    
  text-black
  ml-6
`}
`;



export default function Services() {
  return (
      <Container>
          <Title>Превратите свои идеи в реальность</Title>
          <Content>
              <img className="" src="./assets/images/pictrure.png" />
              <TextContainer>
                  <Text>1. Удобный заказ онлайн</Text>
                  <Descr>Посчитать и заказать можно даже на сайте. Уникальный дизайн в он-лайн конструкторе, и просчет количества с помощью калькулятора</Descr>
                  <Text>2. Консультируем онлайн</Text>
                  <Descr>Мы готовы ответить на самые сложные вопросы, сделать визуализацию и просчитать количество</Descr>
                  <Text>3. Самый широкий выбор</Text>
                  <Descr>Наш ассортимент в 10 раз больше конкурентов и постоянно обновляется. Весь товар в наличии</Descr>
              </TextContainer>
          </Content>
      </Container>
  );
}
