import withAuth from '../components/withAuth';

function Dashboard() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
      };
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

export default withAuth(Dashboard);