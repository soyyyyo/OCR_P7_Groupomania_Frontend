import { Fragment, useEffect, useState } from 'react'
// impoter les bons noms de pages/composants
// import Header from './components/Header/Header'
import { Header, TestApi, Post, Connexion, Error, Footer, Inscription, Nav, NewPost, Profile } from "./components"
import Allposts from './pages/Allposts/Allposts'

const App = () => {
    // const [currentUser, setCurrentUser] = useState();

    // useEffect(() => {
    //     // const currentUser = getCurrentUser();
    //     const user = { id: 2, role: "admin" };
    //     setCurrentUser(user);
    // }, []);

    return (
        <Fragment>
            <Header />
            <p>FORMULAIRE NEW POST</p>
            <NewPost />
            <p>TOUS LES POSTS</p>
            <Allposts />
            {/* <TestApi currentUser={currentUser} /> */}
            {/* <TestApi /> */}
        </Fragment>
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