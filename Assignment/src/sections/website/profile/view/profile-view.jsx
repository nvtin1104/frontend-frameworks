import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { handleToast } from 'src/utils/toast';

import { getAllOrders } from 'src/redux/slices/ordersSlice';
import { fetchMe, updateUser, resetStateUpdateAction } from 'src/redux/slices/usersSlice';

import UpdateForm from '../update-form';
import ProfileOrder from '../profile-order';
// ----------------------------------------------------------------------

export default function ProfileView() {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.me);
  const statusUser = useSelector((state) => state.users.statusMe);
  const status = useSelector((state) => state.orders.statusGet);
  const data = useSelector((state) => state.orders.orders);
  const statusUpdate = useSelector((state) => state.users.statusUpdate);
  useEffect(() => {
    if (status === 'success') {
      setOrders(data);
    }

  }, [data, status]);
  useEffect(() => {
    if (statusUpdate === 'success') {
      handleToast('success', 'Update profile success');
      dispatch(fetchMe());
      dispatch(resetStateUpdateAction());
    }
  }, [statusUpdate, dispatch]);
  useEffect(() => {
    if (statusUser === 'success' && user) {
      const userId = user._id;
      dispatch(getAllOrders(userId));
    }
  }, [dispatch, user, statusUser]);
  const handleGetContent = (values) => {
    values.birthday = new Date(values.birthday).getTime();
    dispatch(updateUser({userId: user._id, data: values}));
  }
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={12} lg={12}>
          {status === 'success' && <ProfileOrder orders={orders} />}
        </Grid>
        <Grid xs={12} md={12} lg={6}>
         {statusUser === 'success' && <UpdateForm handleGetContent={handleGetContent} user={user} />}
        </Grid>
      </Grid>
    </Container>
  );
}
