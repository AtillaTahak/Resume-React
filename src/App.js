import React, { useState } from 'react';
import Menu from './components/Menu';
import Content from './components/Content';
import GlobalStye from './components/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import info from './components/data/data'


const theme ={
  colors:{
    default:'#bd5d38',
  }
}
function App() {
  const [open, setOpen] =useState(false);
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStye />
        <Menu data={info} open={open} setOpen={setOpen} />
        <Content data={info} />
      </div>

    </ThemeProvider>
  );
}

export default App;
