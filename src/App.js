import Menu from './components/Menu';
import Content from './components/Content';
import GlobalStye from './components/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'


const theme ={
  colors:{
    default:'#bd5d38',
    header:'#ebfbff',
    body:'#fff',
    footer:'#000333'
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStye />
        <Menu />
        <Content />
      </div>

    </ThemeProvider>
  );
}

export default App;
