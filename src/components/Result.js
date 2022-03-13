import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import {DataContext} from '../context/DataProvider';

const Container = styled(Box)`
    height: 35vh;
    margin-top: 10px;
    border-radius: 10px;
    background-color: #FFFFFF;
    box-shadow: 13px 13px 20px #cbced1,
                 -13px -13px 20px #ffffff;

`


const Result = () => {

    const [srcCode, setSrcCode] = useState('')

    const { html, css, js } = useContext(DataContext);

    const src = `
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
    </html> 
    `

    useEffect(()=>{
        setTimeout(()=>{
            setSrcCode(src);   
        },1000)
    },[html, css, js])
    
  return (
      <>
      <Container style = { html || css || js ? null :{background: '#444857'}}>
          <iframe
              srcDoc={srcCode}
              title='output'
              sandbox='allow-scripts'
              frameBorder='1'
              width='100%'
              height='100%'
          />

        </Container>
      </>
  )
};

export default Result;
