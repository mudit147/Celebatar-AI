import { UserButton } from '@clerk/nextjs';

const RootPage = () => {
  return (
    <div>
      Root Page (protected)
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default RootPage;
