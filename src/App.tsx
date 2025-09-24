import home from "@/assets/icons/home.svg";
import calendar from "@/assets/icons/calendar.svg";
import chevDown from "@/assets/icons/chevDown.svg";
import posts from "@/assets/icons/album.svg";
import assets from "@/assets/icons/Suitcase.svg";
import upload from "@/assets/icons/Upload.svg";
import payment from "@/assets/icons/payment.svg";
import user from "@/assets/icons/User Rounded.svg";
import SaralLogo from "@/assets/images/saral-logo.svg";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router";
import HomePage from "@/pages/Home";
import PostsPage from "@/pages/Posts";
import AssetsPage from "@/pages/Assets";
import UploadsPage from "@/pages/Uploads";
import PaymentsPage from "@/pages/Payments";
import ProfilePage from "@/pages/Profile";
import DefaultLayout from "@/layouts/Default";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useWindowSize from "@/hooks/useWindowSize"; 

const navItems = [
  {
    label: "Home",
    icon: home,
    href: "/",
  },
  {
    label: "Posts",
    icon: posts,
    href: "/posts",
  },
  {
    label: "Assets",
    icon: assets,
    href: "/assets",
  },
  {
    label: "Uploads",
    icon: upload,
    href: "/uploads",
  },
  {
    label: "Payments",
    icon: payment,
    href: "/payments",
  },
  {
    label: "Profile",
    icon: user,
    href: "/profile",
  },
];

function App() {
  const { width } = useWindowSize();
  const isMobile = (width ?? 0) < 768;
  return (
    <BrowserRouter>
      <div className="bg-zinc-50">
        <nav className="w-full sticky top-0 z-10 bg-white border-b border-slate-200">
          <div className="flex flex-row items-center justify-between gap-6  p-2.5">
            <div>
              <Link to="/">
                <img
                  src={SaralLogo}
                  alt="Saral Logo"
                  className="w-36 aspect-auto"
                />
              </Link>
            </div>
            <div className="lg:flex hidden flex-row items-center justify-center gap-4">
              {navItems.map((item) => (
                 <NavLink
                 to={item.href}
                 key={item.href}
                 className={({ isActive }) =>
                   `flex flex-col w-20 h-18 items-center justify-center gap-1 rounded-md bg-white hover:bg-slate-100
                   ${isActive ? "text-purple-600" : "text-gray-600"}`
                 }
               >
                 <img src={item.icon} alt={item.label} className="w-6 h-6" />
                 <span>{item.label}</span>
               </NavLink>
              ))}
            </div>
            <div className="flex flex-row items-center justify-center gap-6">
              {isMobile ? (
                  <button className="rounded-sm hover:bg-slate-100 flex items-center gap-2  p-2">
                  <img src={calendar} alt="Calendar" className="w-5 h-5" />
                </button>
              ) : (
                <button className="rounded-sm hover:bg-slate-100 flex items-center gap-2 border border-slate-200 p-2">
                <img src={calendar} alt="Calendar" className="w-5 h-5" />
                <div className=" flex items-center gap-2">
                  <span>All time</span>
                  <img src={chevDown} alt="Chevron Down" className="w-3 h-3" />
                </div>
              </button>
              )}
             

              <button className="p-1 rounded-sm hover:bg-slate-100 ">
                <Bell size={24} />
              </button>

              <Avatar className="size-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </nav>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/assets" element={<AssetsPage />} />
            <Route path="/uploads" element={<UploadsPage />} />
            <Route path="/payments" element={<PaymentsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
        <nav className="w-full lg:hidden fixed bottom-0 left-0 z-20 bg-white border-t border-slate-200 shadow-md">
          <div className="flex justify-around items-center py-2">
            {navItems.map((item) => (
              <Link
                to={item.href}
                key={item.href}
                className="flex flex-col items-center justify-center"
              >
                <img src={item.icon} alt={item.label} className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
