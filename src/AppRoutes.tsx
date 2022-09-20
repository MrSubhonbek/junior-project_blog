import React from 'react'
import {
    Route,
    Routes
} from "react-router-dom";
import { AboutMe } from './pages/About Me/AboutMe';
import { Home } from './pages/Home/Home';
import { SingleArticle } from './pages/Single Article/SingleArticle';
import { Endpoints } from './shared/constants';
export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path={Endpoints.Home} element={<Home />} />
            <Route path={Endpoints.AboutMe} element={<AboutMe />} />
            <Route path={Endpoints.Article + Endpoints.ArticleId} element={<SingleArticle />} />
        </Routes>
    )
}
