import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: "absolute",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({props}) {
  console.log(props)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>More Details</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Border: {props.b!=undefined && props.b.map((x)=>{return <li>{x}</li>})}
          language :{props.l!=undefined && props.l.map((x)=>{ return <li>{x.name}</li> })}
          currencies : {props.c!=undefined && props.c.map((x)=>{ return <li>{x.name}</li> })}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           
           
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
