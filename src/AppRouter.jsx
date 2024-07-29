import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalaxyGridPage from './pages/GalaxyGridPage';
import FrothPage from './pages/FrothPage';
import ClipprPage from './pages/ClipprPage';
import NotFound from './pages/NotFound'; 

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/galaxy-grid-info" element={<GalaxyGridPageWithScrollToTop />} />
                <Route path="/froth-info" element={<FrothPageWithScrollToTop />} />
                <Route path="/clippr-info" element={<ClipprPageWithScrollToTop />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

function GalaxyGridPageWithScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <GalaxyGridPage />;
}

function FrothPageWithScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <FrothPage />;
}

function ClipprPageWithScrollToTop() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <ClipprPage />;
}
