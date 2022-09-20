import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { SingleArticle } from './pages/Single Article/SingleArticle';
import { Endpoints } from './shared/constants';
type PropsType = {
    id: number
}
export const AppRoutes: React.FC<PropsType> = ({ id }) => {
    return (
        <Routes>
            <Route path={Endpoints.Home} element={<Home />} />
            <Route path={Endpoints.Article} element={<SingleArticle id={id} />} />
        </Routes>
    )
}
