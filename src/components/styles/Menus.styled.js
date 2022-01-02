import styled from 'styled-components'
import {Link} from 'react-scroll'
import breakpoint from './breakpoint'

export const Menus = styled.nav`
  background-color: ${({ theme }) => theme.colors.default};

  @media only screen and (${breakpoint.device.sm}) {
    display: none;
  }


  @media only screen and(${breakpoint.device.lg}) {
  } 
`
export const MenusUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;  
  justify-content: center;
  position: sticky;
  top:0;

`

export const MenusUlLi = styled.ul`
  margin-top: 7%;
`
export const MenusUlLiA = styled(Link)`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 7%;
  &:hover{
  text-decoration: underline;
  cursor: pointer;
  color:white;
  }
`

export const MobileMenus = styled.nav`
  display: none;
  background-color: ${({ theme }) => theme.colors.default};
  grid-area: 1 / 1 / 2 / 3;
  justify-content: space-between;

  @media only screen and (${breakpoint.device.sm}) {
    display: flex;
  }


  @media only screen and(${breakpoint.device.lg}) {
    display: none;
  } 
`

export const MobileMenusUl = styled.ul` 

margin-top:10px;
list-style: none;
padding-bottom:20px;
display: ${({open})=>open ? 'flex':'none'};
${console.log(({open})=>open)}
flex-direction: column;


` 
export const MobileMenuBtn = styled.button`
border:none;
background-color:transparent;
`
