import Routes from './routes';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
    <Provider store={store}>
        <Routes />
        <ToastContainer />
    </Provider>
);

export default App;
