import React, {useContext} from 'react';
import Editor from './Editor';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import {DataContext} from '../context/DataProvider';





const Container = styled(Box)`
    background-color:#060606;
    ${'' /* width: 50vh; */}
    height:50vh;
    display: flex;
    margin-top:20px;
    border-radius: 15px;
    background-color: #a80eeb;
    box-shadow: 19px 19px 20px #cbced1,
                 -13px -13px 20px #ffffff;
`

const Code = () => {

    const { html, css, js, setHtml, setCss, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor 
                language="xml"
                heading="HTML"
                value={html}
                onChange={setHtml}
                color='#34e1eb'
            />
            <Editor 
                language="css"
                heading="CSS"
                value={css}
                onChange={setCss}
                color='#f7f307'
            />
            <Editor 
                language="javascript"
                heading="JAVASCRIPT"
                value={js}
                onChange={setJs}
                color='#6beb34'
            />
        </Container>
    )
}

export default Code;