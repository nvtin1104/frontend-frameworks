import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useContext } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';

import { useRouter } from 'src/routes/hooks';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgBlur } from 'src/theme/css';
import { getCart } from 'src/redux/slices/cartSlice';
import { UserContext } from 'src/context/user.context';

import Iconify from 'src/components/iconify';

import Searchbar from './common/searchbar';
import { NAV, HEADER } from './config-layout';
import WidgetCart from './common/widget-cart';
import AccountPopover from './common/account-popover';
import NotificationsPopover from './common/notifications-popover';

// ----------------------------------------------------------------------

export default function Header({ onOpenNav }) {
  const { login } = useContext(UserContext);
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const user = useSelector((state) => state.users.me);
  const carts = useSelector((state) => state.cart.carts);
  const status = useSelector((state) => state.cart.statusGet);
  const statusUser = useSelector((state) => state.users.statusMe);
  const statusAdd = useSelector((state) => state.users.status);
  const lgUp = useResponsive('up', 'lg');

  const handleLogin = () => {
    router.push('/login');
  };
  const handleOpenCart = () => {
    setOpenCart(true);
  };
  const handleCloseCart = () => {
    setOpenCart(false);
  };
  useEffect(() => {
    if (login && statusUser === 'success' && user) {
      const userId = user._id;
      dispatch(getCart(userId));
    }
    if (statusAdd === 'success') {
      const userId = user._id;
      dispatch(getCart(userId));
    }
  }, [login, user, statusUser, dispatch, statusAdd]);
  useEffect(() => {
    if (carts) {
      setQuantity(carts.length);
    }
  }, [carts, status]);
  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <Searchbar />

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        {login ? (
          <>
            <WidgetCart
            quantity={quantity}
            openFilter={openCart}
            onOpenFilter={handleOpenCart}
            onCloseFilter={handleCloseCart}
            carts={carts || []}
          />
            <NotificationsPopover />
            <AccountPopover />
          </>
        ) : (
          <LoadingButton
            fullWidth
            size="small"
            variant="contained"
            color="inherit"
            onClick={() => handleLogin()}
          >
            Login
          </LoadingButton>
        )}
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: 'none',
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...bgBlur({
          color: theme.palette.background.default,
        }),
        transition: theme.transitions.create(['height'], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
