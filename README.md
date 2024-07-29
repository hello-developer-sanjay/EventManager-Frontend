# Event Management Application

## Description

This is an Event Management Application that allows users to manage events, including creating, editing, and viewing events. The application is designed with a modern, responsive interface and is built using React.js, Redux for state management, and a backend server.

## Live Demo

You can view the live application [here](https://event-manager-two.vercel.app/).

## Table of Contents

- [File Structure](#file-structure)
- [Pages and Components](#pages-and-components)
- [Routes](#routes)
- [Setup and Installation](#setup-and-installation)
- [Contributing](#contributing)
- [License](#license)

## File Structure

src/
├── components/
│ ├── Layout.jsx
│ ├── SignInSignUp.jsx
├── pages/
│ ├── AddEventPage.jsx
│ ├── Dashboard.jsx
│ ├── EditEventPage.jsx
│ ├── ForgotPassword.jsx
│ ├── ListEventsPage.jsx
│ ├── Register.jsx
│ ├── ResetPassword.jsx
├── redux/
│ ├── actions/
│ │ ├── authActions.js
│ ├── reducers/
│ │ ├── authReducer.js
│ ├── store.js
├── App.js
├── index.js
├── styles/
│ ├── main.css
└── utils/
├── api.js




## Pages and Components

### [AddEventPage](https://event-manager-two.vercel.app/add-event)

The `AddEventPage` allows users to add new events or edit existing ones. It features a form to input event details and handles both creation and updates based on whether an event ID is provided.

### [Dashboard](https://event-manager-two.vercel.app/dashboard)

The `Dashboard` provides an overview of the user's events. It displays a summary or list of events and may include widgets or analytics related to event management.

### [EditEventPage](https://event-manager-two.vercel.app/add-event/:id)

The `EditEventPage` is used to modify existing events. It retrieves the event details based on the provided ID and allows users to make changes and save them.

### [ForgotPassword](https://event-manager-two.vercel.app/forgot-password)

The `ForgotPassword` page enables users to request a password reset link. They enter their email address, and if it matches an account, a reset link is sent.

### [ListEventsPage](https://event-manager-two.vercel.app/list-events)

The `ListEventsPage` displays a list of all events. Users can view event details, and the page may include sorting and filtering options.

### [Register](https://event-manager-two.vercel.app/register)

The `Register` page allows new users to sign up for an account. It includes a registration form where users input their information to create a new account.

### [ResetPassword](https://event-manager-two.vercel.app/reset-password/:token)

The `ResetPassword` page is accessed via a link sent to the user's email. It allows users to set a new password using the provided token.

### [SignInSignUp](https://event-manager-two.vercel.app/login)

The `SignInSignUp` component handles both user login and registration. It provides a form for users to log in or sign up for an account.

## Routes

The application uses React Router for navigation. Here are the key routes:

```javascript
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEventPage from './pages/AddEventPage';
import ListEventsPage from './pages/ListEventsPage';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import SignInSignUp from './components/SignInSignUp';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

const App = () => {
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


## Setup and Installation
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/event-manager.git
Navigate to the project directory:
bash
Copy code
cd event-manager
Install dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Contributing
If you would like to contribute to the project, please fork the repository and submit a pull request with your changes. Ensure that all tests pass and include appropriate documentation for new features.
