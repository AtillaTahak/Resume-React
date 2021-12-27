import { createGlobalStyle } from 'styled-components'

const GlobalStye = createGlobalStyle`
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
.App{
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-content: center;
  border-top: 4px solid #dc3545;
}

.profilePhoto{
  width: 160px;
  height: 160px;
  border-radius: 50% !important;
}

h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-weight: 700;
    line-height: 1.2;
    color: #343a40;
}

`

export default GlobalStye;