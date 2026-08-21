import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { ThemeProvider } from "../context/ThemeContext";

function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
        <Navbar />

        <main className="w-full min-w-0 flex-1 pt-16 sm:pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MainLayout;