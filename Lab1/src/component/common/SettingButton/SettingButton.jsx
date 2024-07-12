// import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { PropTypes } from 'prop-types';
// import { EditIcon } from '@mui/icons-material/Edit';
import EditIcon from '@mui/icons-material/Edit';

const SettingButton = ({ actions }) => {
    console.log(actions);
    return (
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            fixed
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={action.onClick}
                />
            ))}
        </SpeedDial>
    );
}

SettingButton.propTypes = {
    actions: PropTypes.array.isRequired,
};
export default SettingButton;
