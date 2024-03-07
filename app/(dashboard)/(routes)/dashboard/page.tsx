import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <div className="">
      <p className="text-green-500">Dashboard</p>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default DashboardPage;
