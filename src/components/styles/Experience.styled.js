import styled from 'styled-components'

export const Content = styled.section`
display:flex;
flex-direction:column;
height: auto;
justify-content: center;
margin:auto 2%;
margin-top: 10vh;
padding-bottom: 100px;

`

export const Cards = styled.div`
display:flex;
justify-content:space-between;
flex-direction: row-reverse;
flex-wrap: nowrap;
width: 100%;

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
margin-top: 20px;

`