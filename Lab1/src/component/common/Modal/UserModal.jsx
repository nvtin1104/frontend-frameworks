import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import { Stack, TextField } from '@mui/material';
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UserModal({ open, setOpen, id }) {
    const handleEdit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        axios.put(`http://localhost:3000/users/${id}`, data)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    return (
        <div>
            <Modal
                open={open}
                onClose={setOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <form onSubmit={handleEdit}>
                    <Stack spacing={2}>
                        <TextField
                            name='name'
                            label='Name'
                        />
                        <TextField
                            name='email'
                            label='Email'
                        />
                        <TextField
                            name='phone'
                            label='Phone'
                        />
                    </Stack>
                    <button type='submit'>Tao</button>
                </form>
                </Box>
            </Modal>
        </div>
    );
}

UserModal.propTypes = {
    open: PropTypes.bool,
    setOpen: PropTypes.func,
    id: PropTypes.number
}