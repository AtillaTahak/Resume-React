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
}

.profilePhoto{
  width: 160px;
  height: 160px;
  border-radius: 50% !important;
}


`

export default GlobalStye;