import App from 'App'
import store from 'Store'

let AppRouter = <HashRouter><App/></HashRouter>


window.onload = () => {
    ReactDOM.render(
        <Provider store={Store}>
            {AppRouter}
        </Provider>,
        document.getElementById('root')
    );
};









