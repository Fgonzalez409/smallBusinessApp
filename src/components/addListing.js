import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import mapIcon from '../images/mapIcon.jpg'
import MyMap from './Map'


const addListing = (props) => {
    const navigate = useNavigate()

    // const [open, setOpen] = useState(true)

    const [listing, setListing] = useState({
        business_name: "",
        address: "",
        hours: "",
        description: "",
        id: props.listings.length+1
    })

    const checkOpen = () => {
        return open === true ? navigate('/listings') : null;
      };
    
      const handleClose = () => {
        setOpen(false);
        checkOpen();
      };
    
      const handleTextChange = (e) => {
        const { name, value } = e.target;
        setListing((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
      };
    
      const handleCoordinates = () => {
        props.getCoordinates(listing.address);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { ...listing };
        props.addListing(payload);
        handleClose();
      };
    
      return (
        <>
         
          <Dialog open={open} onClose={handleClose} maxWidth='xl'>
            <DialogTitle>Add New Business Listing</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add a new listing, simply fill out the form below and click
                "Submit".
              </DialogContentText>
              <Box sx={{ display: 'flex', gap: '1em', minWidth: '867px' }}>
                <Box sx={{ width: '50%', maxWidth: '520px' }}>
                  <TextField
                    required
                    autoFocus
                    value={listing.name}
                    name='business_name'
                    label='Name'
                    margin='dense'
                    id='name'
                    type='text'
                    fullWidth
                    variant='standard'
                    onChange={handleTextChange}
                  />
                  <TextField
                    required
                    value={listing.address}
                    name='address'
                    label='Address'
                    margin='dense'
                    id='address'
                    type='text'
                    fullWidth
                    variant='standard'
                    onChange={handleTextChange}
                    onBlur={handleCoordinates}
                  />
                  <TextField
                    value={listing.hours}
                    name='hours'
                    label='Hours of Operation'
                    margin='dense'
                    id='hours'
                    type='text'
                    fullWidth
                    variant='standard'
                    onChange={handleTextChange}
                  />
                  <TextField
                    value={listing.description}
                    name='description'
                    label='Description'
                    margin='dense'
                    id='description'
                    type='text'
                    fullWidth
                    variant='standard'
                    onChange={handleTextChange}
                  />
                </Box>
                {!props.coordinates.lat ? (
                  <div className='image-container'>
                    <img className='map-icon' src={mapIcon} alt='Map Icon' />
                  </div>
                ) : (
                  <MyMap
                    lat={props.coordinates.lat}
                    lng={props.coordinates.lng}
                    className='new__business__map'
                  />
                )}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Link to='/listings'>
                <Button onClick={handleSubmit}>Submit</Button>
              </Link>
            </DialogActions>
          </Dialog>
        </>
      );
    };
    
    export default addListing;
