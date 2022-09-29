import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constans/routes';
import MainLayout from '../Layouts/MainLayout/MainLayout';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.homePage} element={<MainLayout />}></Route>
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;