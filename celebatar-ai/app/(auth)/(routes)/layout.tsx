const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-zinc-800 flex items-center justify-center h-full'>
      {children}
    </div>
  );
};

export default AuthLayout;
