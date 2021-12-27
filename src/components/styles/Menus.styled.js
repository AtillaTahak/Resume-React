import styled from 'styled-components'

export const Menus = styled.nav`
  background-color: ${({ theme }) => theme.colors.default};
`
export const MenusUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;  
  justify-content: center;

`

export const MenusUlLi = styled.ul`
  margin-top: 7%;
`
export const MenusUlLiA = styled.a`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 7%;
  &:hover{
  text-decoration: underline;
  cursor: pointer;
  }
`