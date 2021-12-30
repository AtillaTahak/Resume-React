import styled from 'styled-components';

export const Container = styled.div`
border-bottom: 3px solid ${({ theme }) => theme.colors.default};
&:hover{
    transform: scale(1.1);
}

`
export const ProjectLink = styled.a`
text-decoration: none;
&:hover{
    text-decoration: underline;
    color:${({ theme }) => theme.colors.default};
}

`

export const Projecth3 = styled.h3`
&:hover{
    color:${({ theme }) => theme.colors.default};
}`

export const ProjectLabel = styled.span`

color:${({ theme }) => theme.colors.default};
`