import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEventPage from './pages/AddEventPage';
import ListEventsPage from './pages/ListEventsPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SignInSignUp from './components/SignInSignUp';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import { useDispatch } from 'react-redux';
import { loadUser } from './redux/actions/authActions';
import Layout from './components/Layout';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/add-event/:id" element={<AddEventPage />} />
                    <Route path="/add-event" element={<AddEventPage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<SignInSignUp />} />
                    <Route path="/list-events" element={<ListEventsPage />} />
                    <Route path="/" element={<AddEventPage />} />
                </Routes>   
            </Layout>
        </Router>
    );
};

export default App;
