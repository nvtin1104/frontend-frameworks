const { DashboardService } = require('~/services/dashboard.service')

const handleGetDashboard = async (req, res) => {
    try {
        const response = await DashboardService.getDashboardData()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const dashboardController = {
    handleGetDashboard
}