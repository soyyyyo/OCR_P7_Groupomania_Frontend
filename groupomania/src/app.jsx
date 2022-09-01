import { Fragment, useEffect, useState } from 'react'
import { Header, Footer, NewPost, ToolBar } from "./components"
import Allposts from './pages/Allposts/Allposts'
import Profil from './pages/Profil/Profil'
import Signup from './pages/Auth/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UidContext } from './components/AppContext/AppContext'
import GlobalStyle from './utils/style/GlobalStyle'
import './utils/style/Normalize.css'


const App = () => {

    const [uid, setUid] = useState(null)

    useEffect(() => {
        setUid(sessionStorage.getItem('userId'))
        console.log("uid from app.jsx is:", uid)
    }, [uid])

    return (
        <UidContext.Provider value={uid}>
            <Router>
                <GlobalStyle />
                <div className="container">
                    <Header />
                    <div className="container-center">
                        <ToolBar />
                        <main>
                            <Switch>
                                <Route exact path="/">
                                    {uid ?
                                        <div>
                                            <NewPost />
                                            <Allposts />
                                        </div>
                                        : <Profil />}
                                </Route>
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
            </Router>
        </UidContext.Provider>
    )
}

export default App