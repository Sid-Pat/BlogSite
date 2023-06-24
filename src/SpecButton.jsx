import React from 'react'
import Button from '@mui/material/Button';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';


function SpecButton() {
  return (
    <Button variant="outlined" startIcon={<CreateTwoToneIcon/>}>
      Create Blog
    </Button>
  )
}

export default SpecButton