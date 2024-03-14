import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';


export default function UserCard({ data, onOpen }) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Nguoi dung
                </Typography>
                <Typography variant="h5" component="div">
                    {data.name}

                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.email}

                </Typography>
                <Typography variant="body2">
                    {data.phone}

                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={onOpen} size="small">Open</Button>
            </CardActions>
        </Card>
    );
}

UserCard.propTypes = {
    data: PropTypes.object,
    onOpen : PropTypes.func
}