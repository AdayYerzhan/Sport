import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Counter} from "./components/Counter";
import "./index.scss"
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

const App = () => {
    return (
        <>
            <a href="https://ubet.kz/registration/?link=28ab60bc8149e627fbb84abdd031db35" className="banner-bg"></a>
            <div className={"container"}>
                <div className="app">
                    <Link to={'/'}>MainPage</Link>
                    <Link to={'/about'}>AboutPage</Link>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path={'/about'} element={<AboutPageAsync/>} />
                            <Route path={'/'} element={<MainPageAsync/>} />
                        </Routes>
                        <Counter />
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default App;