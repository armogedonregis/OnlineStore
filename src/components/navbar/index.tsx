import styled from "styled-components";
import tw from "twin.macro";

const NavbarContainer = styled.div`
  ${tw`
  w-full  
  items-center
  h-[3rem]
  bg-blackBg
  mt-4
  flex
  justify-between
`}
`;

const ItemContainer = styled.div`
  ${tw` 
  w-7/12   
  flex
  ml-16
  justify-between
`}
`;

const Item = styled.button`
  ${tw` 
  relative
  hover:bg-gray
  p-2
`}
`;

const Phone = styled.div`
  ${tw`
  flex    
`}
`;

const IconsContainer = styled.div`
  ${tw`    
  flex
`}
`;

const BtnMesseger = styled.button`
  ${tw`    
  flex
  mx-1
`}
`;

const PhoneContainer = styled.div`
  ${tw`    
  mr-16
`}
`;


export default function Navbar() {
  return (
      <NavbarContainer>
        <ItemContainer>
          <Item>
            <a className="flex" href="#">
              Услуги
              <img className="mt-1" width="25px" height="25px" src="./assets/vector/chevron_down.svg" />
            </a>
          </Item>
          <Item>
            <a href="#">
              Сантехнические работы
            </a>
          </Item>
          <Item>
            <a href="#">
              Цены
            </a>
          </Item>
          <Item>
            <a href="#">
              О специалисте
            </a>
          </Item>
        </ItemContainer>
        <IconsContainer>
          <BtnMesseger>
            <img src="./assets/vector/whatsapp.svg" width="25px" height="25px" />
          </BtnMesseger>
          <BtnMesseger>
            <img src="./assets/vector/viber.svg" width="25px" height="25px" />
          </BtnMesseger>
        </IconsContainer>
        <PhoneContainer>
          <a href="#">
          <Phone> <img width="25px" height="25px" src="./assets/vector/phone.svg" />+7 800 800 80 80 </Phone>
          </a>
        </PhoneContainer>
      </NavbarContainer>
  );
}
