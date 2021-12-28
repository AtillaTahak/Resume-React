import styled from 'styled-components'

export const Content = styled.section`
display:flex;
flex-direction:column;
height: 100vh;
justify-content: center;
margin:auto 2%;
margin-top: 10vh;

`

export const Cards = styled.div`
display:flex;
justify-content:space-between;
flex-direction: row-reverse;
flex-wrap: wrap;

`
export const CardsDate = styled.p`
    color: ${({theme})=>theme.colors.default};
`

export const SubHeading = styled.div`
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.2rem;
    opacity: 0.5;

`
export const CardDetails =styled.div`
display: flex;
flex-direction: column;
gap: 15px;

`