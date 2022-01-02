import { createGlobalStyle } from 'styled-components'
import breakpoint from './breakpoint'


const GlobalStye = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
body{
  font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: var(--bs-body-color);
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.App{
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-content: center;
  border-top: 4px solid #dc3545;
  @media only screen and (${breakpoint.device.sm}) {
    display: block;
  }


  @media only screen and(${breakpoint.device.lg}) {
    display: grid;
  } 
}

.profilePhoto{
  width: 160px;
  height: 160px;
  border-radius: 50% !important;
  border: 7px solid #CA7D60;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    line-height: 1.2;
    color: #343a40;
}
.active{
  color: white;
}


`

export default GlobalStye;