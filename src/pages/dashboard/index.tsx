import React from 'react'
import DashboardLayout from './_components/Layout/DashboardLayout'

const Dashboard = () => {
    return (
        <div>Dashboard</div>
    )
}

Dashboard.getLayout = (page: React.ReactNode) => {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}

export default Dashboard