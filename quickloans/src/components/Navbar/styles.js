/**
 * Navigation Bar styles
 */
export const navbarStyles = {
    appbar: {
        width: '100%',
        flexShrink: 0,
        backgroundColor: '#fdfdfd',
        borderRadious: '10px' //doesn't do anything i think
    },
    icons:{
        color: 'rgba(58,59,60)!important',
        marginLeft : '20px',
    },
    text: {
        '& span': {
            marginLeft: '-10px',
            fontWeight: '600px',
            fontSize: '16px',
            color: 'rgba(58,59,60)'
        },
    },
    box:{
        flexGrow: 1, 
        display:'flex', 
        alignItems: 'center', 
        px:0
    }
};

/*
appbar: {
width: 320,
        flexShrink: 0,
'& .MuiDrawer-paper': {
          width: 320,
          boxSizing: 'border-box',
          backgroundColor: '#fdfdfd', //background color
          color: 'rgba(255,255,255,0.7)' //text color
        },
        '& .Mui-selected':{
            color: 'red',
        },
}
*/