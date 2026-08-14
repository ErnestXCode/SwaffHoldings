import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import OurBusiness from "./Pages/OurBusiness";
import Leadership from "./Pages/Leadership";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="our-business" element={<OurBusiness />} />
          <Route path="leadership" element={<Leadership />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;