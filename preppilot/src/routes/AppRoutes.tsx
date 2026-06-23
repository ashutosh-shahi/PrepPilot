import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import UploadResumePage from "../pages/UploadResumePage";
import InterviewPage from "../pages/InterviewPage";
import FeedbackPage from "../pages/FeedbackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/upload" element={<UploadResumePage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
    </Routes>
  );
};

export default AppRoutes;