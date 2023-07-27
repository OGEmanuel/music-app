import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <section className="md:max-w-[60rem] h-screen mx-auto py-3 overflow-hidden">
      <div className="md:w-[60%] px-6 md:px-0 h-full mx-auto">
        <Outlet />
      </div>
    </section>
  );
};

export default RootLayout;
