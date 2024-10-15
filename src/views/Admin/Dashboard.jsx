import { Helmet } from "react-helmet"
import DashboardAdmin from "../../components/DashboardAdmin"

const Dashboard = () => {
  return (
    <div>
        <Helmet>
            <title>Dashboard Admin || PaySchool</title>
        </Helmet>
        <DashboardAdmin />
    </div>
  )
}

export default Dashboard