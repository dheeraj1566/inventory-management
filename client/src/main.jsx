import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
// import Header from './components/Header.jsx'
// import Dashboard from './components/Dashboard.jsx'
// import AddCategory from './pages/AddCategory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* { <RouterProvider router={App} /> } */}
        <App />
    </React.StrictMode>
);
