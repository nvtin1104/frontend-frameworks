import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserCard from '../component/common/UserCard/UserCard';
import { Button, Container } from '@mui/material';
import UserModal from '../component/common/Modal/UserModal';
export const UserDetail = () => {
    const [open, setOpen] = useState(false);
    const { id } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        console.log(id)
        axios.get(`http://localhost:3000/products/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                setUser(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [id])
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <UserCard data={user} onOpen={() => setOpen(true)} />
            <UserModal open={open} setOpen={() => setOpen(false)} id={id} />

        </Container>
    )
}
