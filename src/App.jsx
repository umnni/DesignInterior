import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Interior from "./pages/Interior";
import Vastu from "./pages/Vastu";
import Decor from "./pages/Decor";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";
import LegalPage from "./pages/LegalPage";

function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />

        <Route
          path="/about"
          element={
            <PageLayout>
              <About />
            </PageLayout>
          }
        />

        <Route
          path="/interior"
          element={
            <PageLayout>
              <Interior />
            </PageLayout>
          }
        />

        <Route
          path="/vastu"
          element={
            <PageLayout>
              <Vastu />
            </PageLayout>
          }
        />

        <Route
          path="/decor"
          element={
            <PageLayout>
              <Decor />
            </PageLayout>
          }
        />

        <Route
          path="/portfolio"
          element={
            <PageLayout>
              <Portfolio />
            </PageLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <PageLayout>
              <Contact />
            </PageLayout>
          }
        />

        <Route
          path="/consultation"
          element={
            <PageLayout>
              <Consultation />
            </PageLayout>
          }
        />

<Route
  path="/privacy-policy"
  element={
    <PageLayout>
      <LegalPage />
    </PageLayout>
  }
/>

        <Route
          path="*"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}