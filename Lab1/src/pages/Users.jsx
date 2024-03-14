import React, { useEffect, useState } from 'react';
import ListComponent from '../component/common/List/ListComponent';
import { Container, Stack, TextField } from '@mui/material';
import axios from 'axios';
const Users = () => {
    const [users, setUsers] = useState([])
    const fetchUser = () => {
        axios.get('http://localhost:3000/users')
            .then(function (response) {
                // handle success
                console.log(response);
                setUsers(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    useEffect(() => {
        fetchUser()
    }, [])
    const handlePost = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:3000/users', data)
            .then(function (response) {
                // handle success
                console.log(response);
                fetchUser()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/users/${id}`)
            .then(function (response) {
                // handle success
                console.log(response);
                fetchUser()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <ListComponent data={users} onDelete={handleDelete}/>
            <div>
                <form onSubmit={handlePost}>
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
            </div>
        </Container>
    )
}

export default Users