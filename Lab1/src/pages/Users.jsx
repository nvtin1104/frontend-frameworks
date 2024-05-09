import React, { useEffect, useState } from 'react';
import ListComponent from '../component/common/List/ListComponent';
import { Container, Stack, TextField } from '@mui/material';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
const Users = () => {
    const [users, setUsers] = useState([])
    const fetchUser = () => {
        axios.get('http://localhost:3000/products')
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
            price: e.target.price.value,
            description: e.target.description.value
        }
        axios.post('http://localhost:3000/products', data)
            .then(function (response) {
                toast.success('Them san pham thanh cong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                fetchUser()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    const handleDelete = (id) => {
        console.log(id)
        axios.delete(`http://localhost:3000/products/${id}`)
            .then(function (response) {
                toast.success('Xoa san pham thanh cong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                fetchUser()
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }
    const handleSearch = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/products?name=${e.target.search.value}`)
            .then(function (response) {
                // handle success
                toast.success('Tim kiem san pham thanh cong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
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
    const handlePagination = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:3000/products?_page=${e.target.page.value}&_per_page=${e.target.limit.value}`)
            .then(function (response) {
                // handle success
                toast.success('Phan trang thanh cong!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
                setUsers(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }
    const handleSort = () => {
        axios.get(`http://localhost:3000/products?_sort=price`)
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
    return (
        <Container sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <div style={{
                width: '60%'
            }}>
                <form onSubmit={handleSearch}>
                    <Stack spacing={1}>
                        <TextField name="search" label="search" />
                        <button type="submit">Tim kiem</button>
                        <button type='button' onClick={fetchUser}>Reload</button>
                    </Stack>
                </form>
                <form onSubmit={handlePagination}>
                    <Stack spacing={1}>
                        <TextField name="page" label="Page" />
                        <TextField name="limit" label="Limit" />
                        <button type="submit">Phan trang</button>
                        <button type='button' onClick={handleSort}>Sort</button>
                    </Stack>

                </form>
                <div style={{
                    overflow: 'auto',
                    height: '300px'
                }}>

                    <ListComponent data={users} onDelete={handleDelete} />
                </div>
            </div>
            <div>
                <form onSubmit={handlePost}>
                    <Stack spacing={2}>
                        <TextField
                            name='name'
                            label='Name'
                        />
                        <TextField
                            name='price'
                            label='Price'
                        />
                        <TextField
                            name='description'
                            label='description'
                        />
                    </Stack>
                    <button type='submit'>Tao</button>
                </form>
            </div>
        </Container>
    )
}

export default Users