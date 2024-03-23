import { Box, Button, Container, Stack, TextField } from '@mui/material'
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
// const loginSchema = {
//     username: Yup.string().required('Ten dang nhap bat buoc').max(15)
// }
const LoginPage = () => {
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (e.target.username.value === '' || e.target.password.value === '') {
            alert('Vui long nhap day du thong tin');
        }
        else {
            axios.get(`http://localhost:3000/users?username=${e.target.username.value}&password=${e.target.password.value}`)
                .then(function (response) {
                    if (response.data.length > 0) {
                      toast.success('Dang nhap thanh cong', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      navigate('/products')
                    }
                    else {
                        toast.error('Dang nhap that bai', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '600px'
            }}
        >
            <h1>Login Page</h1>
            <form onSubmit={handleLogin} style={{ width: '100%' }}>
                <Stack spacing={2} direction={'column'} sx={{ width: '100%' }}>
                    <TextField label="User Name" name='username' />
                    <TextField label="Password" name='password' />
                    <Button type='submit' variant='outlined'>Login</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default LoginPage