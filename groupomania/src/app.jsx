import { Fragment, useEffect, useState } from 'react'
// impoter les bons noms de pages/composants
// import Header from './components/Header/Header'
import { Header, TestApi, Post, Connexion, Error, Footer, Inscription, Nav, NewPost, Profile, ToolBar } from "./components"
import Allposts from './pages/Allposts/Allposts'
import GlobalStyle from './utils/style/GlobalStyle'
import colors from './utils/style/colors'
import './utils/style/Normalize.css'
import { Link } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    // const [currentUser, setCurrentUser] = useState();
    // 
    // useEffect(() => {
    //     // const currentUser = getCurrentUser();
    //     const user = { id: 2, role: "admin" };
    //     setCurrentUser(user);
    // }, []);

    return (
        <BrowserRouter>
            <Fragment>
                <GlobalStyle />
                <div className="container">
                    <Header />
                    <div className="container-center">
                        <ToolBar />
                        <main>
                            <NewPost />
                            <Allposts />
                        </main>
                    </div>
                    <Signup />
                    <Footer />
                </div>
                {/* <TestApi currentUser={currentUser} /> */}
                {/* <TestApi /> */}
            </Fragment>
        </BrowserRouter>
    )
}

export default App

/*
function app() {
    return (
        <Router>
            <ThemeProvider>
                <SurveyProvider>
                    <GlobalStyle />
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/survey/:questionNumber">
                            <Survey />
                        </Route>
                        <Route path="/results">
                            <Results />
                        </Route>
                        <Route path="/freelances">
                            <Freelances />
                        </Route>
                        <Route
                            path="/profile/:id"
                            render={(props) => <Profile {...props} />}
                        />
                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                    <Footer />
                </SurveyProvider>
            </ThemeProvider>
        </Router>
    )
}
*/