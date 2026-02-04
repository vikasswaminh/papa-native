import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import FW1 from "@/pages/FW1";
import { Layout } from "@/components/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fw1" element={<FW1 />} />
        </Routes>
      </Layout>
    </Router>
  );
}
