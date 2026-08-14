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
      <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
        <Navbar />

        <main className="w-full flex-1 pt-20">
          <Outlet />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MainLayout;