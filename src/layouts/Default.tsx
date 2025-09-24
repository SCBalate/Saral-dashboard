import { Outlet } from "react-router";

export const DefaultLayout = () => {
  return (
    <div className="max-w-5xl w-full mx-auto p-4 sm:py-6">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
