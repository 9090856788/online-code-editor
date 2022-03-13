import React , {useState} from 'react';
import {Box} from '@mui/material';
import {styled} from '@mui/material/styles';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

// code mirror component

import {Controlled as CodeMirror} from 'react-codemirror2-react-17';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

const Heading = styled(Box)`
    background: #FFFFFF;
    display:flex;
    padding:9px 12px;
    border-radius: 10px;
    background-color: #b8bfb8;
    box-shadow: 13px 13px 20px #cbced1,
                 -13px -13px 20px #ffffff;
`

const Header = styled(Box)`
    display:flex;
    justify-content: space-between ;
    color: black;
    background:#deded7;
    font-weight:700;
    borderRadius:10;
    border-radius: 10px;
    background-color: #aeedab;
    box-shadow: 13px 13px 20px #cbced1,
                 -13px -13px 20px #ffffff;
`

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic:0;
    flex-direction: column;
    padding:0 8px 8px;
    
`

const Editor = ({heading, language, icons, color, value, onChange}) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor,data,value) => {
        onChange(value);
    }
  return (
<>
    <Container style={open ? null : {flexGrow: 0 }}>
    <br />
          <Header>
              <Heading>
                  <Box component='span' 
                  style={{
                      width:20,
                      height:20,
                      background:color,
                      color:'#000',
                      display:'flex',
                      paddingTop: 2,
                      marginRight: 5,
                      borderRadius: 7 ,  
                  }}>
                      {icons}
                  </Box>
                  {heading}
              </Heading>
              <CloseFullscreenIcon
                fontSize='small'
                style={{ alignSelf: 'center'}}
                onClick={() => setOpen(prevState => !prevState)}  
              />
          </Header>
          <CodeMirror
            value={value}
            onBeforeChange={handleChange}
              options={{
                  lineWrapping:true,
                  lint:true,
                  lineNumbers:true,
                  mode:language,
                  theme:'material'

              }}
          />
    </Container>
</>
  )
};

export default Editor;
