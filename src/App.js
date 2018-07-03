import "normalize.css"
import "./App.css"
import { isMobile } from 'globals'


import Header from 'Header'
import IndexPage from 'IndexPage'

class App extends React.Component {

    render() {
        return <div id='app'>
            <Header/>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
            </Switch>
        </div>
    }
}


export default compose(
    withRouter,
    connect(
        ( { } ) => ( {} ),
        null
    )
)(App)



