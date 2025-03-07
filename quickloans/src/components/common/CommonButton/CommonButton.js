import React from 'react';
import { Button } from '@mui/material';
//import common button to all pages
//common button is a button that is used constantly on nearly every page and serves different needs

const CommonButton = ({children, color, disabled, size, variant, sx}) => {
  return (
    <Button
    color={color}
    disabled={disabled}
    size={size}
    variant={variant}
    sx={sx}
    >
        {children}

    </Button>
  )
}

export default CommonButton