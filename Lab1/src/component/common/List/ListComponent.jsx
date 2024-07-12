import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function ListComponent({ data, onDelete }) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data && data.map((item, index) => (
        <div key={index}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={item.name}
              secondary={
                <>
                  <Typography
                    sx={{ display: 'flex', flexDirection: 'column' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Price: {item.price}
                    <span>
                      Desc:   {item.description}
                    </span>
                  </Typography>

                </>
              }
            />
          </ListItem>
          <IconButton aria-label="delete" onClick={() => onDelete(item.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="view">
            <Link to={'/products/' + item.id}>
              <VisibilityIcon />
            </Link>
          </IconButton>
          <Divider variant="inset" component="li" />
        </div>
      )
      )}

    </List>
  );
}

ListComponent.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func
}