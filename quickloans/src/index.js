import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ApplyPage from './pages/ApplyPage';
import HomePage from './pages/HomePage';
import FAQPage from './pages/FAQPage';
import ApplicationProcessPage from './pages/ApplicationProcessPage';
import ProfilePage from './pages/ProfilePage';
import { ThemeProvider } from '@mui/material/styles';
import {mainTheme} from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={mainTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/apply-form" element={<ApplicationProcessPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
