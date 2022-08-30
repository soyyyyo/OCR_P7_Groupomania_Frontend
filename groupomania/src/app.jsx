import { Fragment, useEffect, useState } from 'react'
// impoter les bons noms de pages/composants
// import Header from './components/Header/Header'
import { Header, TestApi, Post, Connexion, Error, Footer, Inscription, Nav, NewPost, ToolBar } from "./components"
import Allposts from './pages/Allposts/Allposts'
import Profil from './pages/Profil/Profil'
import GlobalStyle from './utils/style/GlobalStyle'
import colors from './utils/style/colors'
import './utils/style/Normalize.css'
import { Link } from 'react-router-dom'
import Signup from './pages/Auth/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UidContext } from './components/AppContext/AppContext'

const App = () => {
    // const [currentUser, setCurrentUser] = useState();
    // 
    // useEffect(() => {
    //     // const currentUser = getCurrentUser();
    //     const user = { id: 2, role: "admin" };
    //     setCurrentUser(user);
    // }, []);

    const [uid, setUid] = useState(null)

    useEffect(() => {
        setUid(sessionStorage.getItem('userId'))
        console.log("uid from app.jsx is:", uid)
    }, [uid])

    return (
        <UidContext.Provider value={uid}>
            <Router>
                <Fragment>
                    <GlobalStyle />
                    <div className="container">
                        <Header />
                        <div className="container-center">
                            <ToolBar />
                            <main>
                                <Switch>
                                    {/* <Route exact path="/">
                                        <NewPost />
                                        <Allposts />
                                    </Route> */}

                                    <Route exact path="/">
                                        {uid ?
                                            <div>
                                                <NewPost />
                                                <Allposts />
                                            </div>
                                            : <Profil />}
                                    </Route>

                                    {/* <Route exact path="/" element={uid ? (<Allposts />) : (<NewPost />)} /> */}



                                    <Route path="/Signup">
                                        <Signup />
                                    </Route>
                                    <Route path="/Profil">
                                        <Profil />
                                    </Route>
                                    <Route path="/EditPost">
                                        <NewPost />
                                    </Route>
                                </Switch>
                            </main>
                        </div>
                        <Footer />
                    </div>
                    {/* <TestApi currentUser={currentUser} /> */}
                    {/* <TestApi /> */}
                </Fragment>
            </Router>
        </UidContext.Provider>
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