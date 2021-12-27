import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';


export const Context = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
height: 100vh;
flex-wrap: wrap;
margin-left: 4rem;
gap: 20px;

`
export const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    line-height: 1.2;
    color: #343a40;
    text-transform: uppercase;
`
export const Titlespan = styled.span`
color: ${({theme})=>theme.colors.default};
`
export const TitleA = styled.a`
color: ${({theme})=>theme.colors.default};
text-decoration: none;
`
export const Adress = styled.p`
font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
`
export const Description = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
`

export const SocialLink = styled(SocialIcon)`
margin-right: 10px;
margin-top: 5%;
&:hover{
    background-color: ${({theme})=>theme.colors.default};
}
`
