import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme} from "./styles";
// import { Suspense } from 'react';
// import { Loading } from './components';
// import RTKQuery from './RTKQuery'

// import { ApiProvider } from '@reduxjs/toolkit/query/react';

// import { productsApi } from './store/productsApi';
// import { RouterProvider } from "react-router-dom";
// import { router } from "./routers/RootRouter.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Perfil } from './pages';
// import "./styles/index.scss"



ReactDOM.createRoot(document.getElementById('root')).render(
  // <ApiProvider api={productsApi}>
  <ThemeProvider theme={theme}>
    <React.StrictMode>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="perfil/:username" element={<Perfil />} />
       </Routes>
       </BrowserRouter>
    </React.StrictMode>
    <GlobalStyle />
  </ThemeProvider>
  // </ApiProvider>
)
