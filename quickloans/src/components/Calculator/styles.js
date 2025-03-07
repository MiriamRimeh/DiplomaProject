/**
 * Calculator component styles
 */

import '@fontsource/roboto/300.css';
import { borderColor, height } from '@mui/system';

//TODO
export const calculatorStyles = {
    boxMain: {
        textAlign: 'left', 
        width: '400px', 
        height: '600px',
        margin: 'auto', 
        paddingLeft: 2, 
        paddingRight: 2,
        paddingTop: 5,
        backgroundColor: '#ffffff'
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600px',
            fontSize: '16px',
            color: 'rgba(58,59,60)',
            
        },
    },
    button: {
        padding: '10px 20px', 
        fontSize: '16px',
        fontWeight: '600px',
        backgroundColor: '#0D47A1'
    },
    box: {
        textAlign: 'left', 
        marginTop: 4 
    },
    boxButton: {
        textAlign: 'center', 
        marginTop: 4 
    },

    input: {
        width: '80px',

    },
    grid: {
        marginTop: 3, 
        borderColor: 'F5A15C'
    },
    slider: {
        '& .MuiSlider-thumb': { //pointer
            color: "#1976D2"
        },
        '& .MuiSlider-track': { //slider
            color: "#1976D2"
        },
        '& .MuiSlider-rail': { //slider before the pointer
            color: "#90CAF9"
        },
        width: '100%'
    
    }
}