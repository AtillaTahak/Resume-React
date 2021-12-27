import styled from 'styled-components'

export const Menus = styled.nav`
  background-color: ${({ theme }) => theme.colors.default};
  height: 100vh;  
`
export const MenusUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:7rem auto;
`

export const MenusUlLi = styled.ul`
  color: rgba(255, 255, 255, 0.55);
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  margin-top: 7%;
  &:hover{
  text-decoration: underline;
  cursor: pointer;
  }
`