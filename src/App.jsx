import { Route, Routes } from "react-router-dom";

import Event from "./components/Eventpage/EventPage";
import ContactUs from "./components/Contactus/ContactUs";
import Home from "./components/Homepage/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import JoinMembership from "./components/JoinMembershipHomepage/JoinMembership";
import DonationComponent from "./components/Donation/DonationComponent";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/membership" element={<JoinMembership />} />
      <Route path="/donation" element={<DonationComponent />} />
    </Routes>
  );
}
