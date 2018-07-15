import "normalize.css"
import "./App.css"
import { isMobile } from 'globals'


import Header from 'Header'
import IndexPage from 'IndexPage'
import InformationPage from 'InformationPage'
import UpdatePicturePage from 'UpdatePicturePage'
import PaymentPage from 'PaymentPage'
import FormDonePage from 'FormDonePage'

class App extends React.Component {

    render() {
        return <div id='app'>
            <Header/>
            <Switch>
                <Route exact path='/' component={IndexPage}/>
                <Route exact path='/information' component={InformationPage}/>
                <Route exact path='/updatepic' component={UpdatePicturePage}/>
                <Route exact path='/payment' component={PaymentPage}/>
                <Route exact path='/done' component={FormDonePage}/>
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



