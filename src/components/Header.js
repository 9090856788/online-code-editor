import React from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {styled} from '@mui/material/styles';
import Logo from '../images/copykode.png';

const Container = styled(AppBar) `
    ${'' /* background:#ecf0f3; */}
    height: 10vh;
    margin-top:10px;
    position:static;
    border-radius: 10px;
    background-color: #f0e771;
    box-shadow: 13px 13px 20px #cbced1,
                 -13px -13px 20px #ffffff;
    
`


const Header = () => {

  return (
      <>
      
      <Container>
        <Toolbar>
            <img src={Logo} alt="Logo"  style={{width:100}}/>
        </Toolbar>
      </Container>
      </>
  )
};

export default Header;


