import { dashboardModel } from '~/models/dashboard.model'

const getDashboardData = async () => {
  const orders = await dashboardModel.getDashboard()
  const dashboard = {
    totalSuccess: 0,
    total: 0,
    completed: 0,
    created: 0,
    pending: 0
  }
  orders.forEach(order => {
    if (order.status === 'completed') {
      dashboard.totalSuccess += order.total
    }
    dashboard.total += order.total
    if (order.status === 'completed') {
      dashboard.completed++
    }
    if (order.status === 'created') {
      dashboard.created++
    }
    if (order.status === 'pending') {
      dashboard.pending++
    }
  })
  return dashboard
}
export const DashboardService = {
  getDashboardData
}