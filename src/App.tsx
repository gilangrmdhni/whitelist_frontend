import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const authToken = useSelector((state: RootState) => state.auth.token);

  return (
    <div className="App bg-gray-100 min-h-screen flex items-center justify-center">
      {authToken ? (
        <AdminPanel />
      ) : (
        <Login />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
