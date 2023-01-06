import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ExplorerPage from "./Components/Pages/ExplorerPage";
import ErrorPage from "./Components/Pages/ErrorPage";
import useStorage from "./Hooks/useStorage";
import { useEffect } from "react";

export default function App() {
  const location = useLocation();
  const setPage = useStorage((state) => state.updatePageNumber);

  useEffect(() => {
    document.title = location.pathname.slice(1);
    setPage(1);
  }, [location, setPage]);


  return (   
    <>
      <Navbar />

      <Routes>
        <Route path="latest" element={<ExplorerPage order="latest" />} />
        <Route path="popular" element={<ExplorerPage order="popular" />} />
        <Route path="" element={<Navigate to="/latest" />} />;
        <Route path="*"
               element={<ErrorPage message="This page was not found." />} />
      </Routes>
    </>
  );
}