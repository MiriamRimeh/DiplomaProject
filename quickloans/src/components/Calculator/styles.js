/**
 * Calculator component styles
 */

import '@fontsource/roboto/300.css';
import { alignProperty } from '@mui/material/styles/cssUtils';

//TODO
export const calculatorStyles = {
    boxMain: {
        textAlign: 'left', 
        width: '400px', 
        margin: 'auto 10em auto auto ', 
        padding: '3em 1em',
        backgroundColor: '#EEEEEE',
    },
    text: {
        fontWeight: '700px',
        fontSize: '18px',
        color: 'rgba(58,59,60)',
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
        margin: '2em auto auto',
        
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