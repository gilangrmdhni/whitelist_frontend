import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../store';
import UploadFile from './UploadFile';

const AdminPanel: React.FC = () => {
  const authToken = useSelector((state: RootState) => state.auth.token);

  const handleTruncate = () => {
    axios.post('/truncate', {}, {
      headers: { Authorization: authToken }
    })
      .then(response => console.log(response.data))
      .catch(error => console.error('Truncate error', error));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <button 
        onClick={handleTruncate} 
        className="bg-red-500 text-white p-2 rounded mb-4 hover:bg-red-700 w-64"
      >
        Truncate Table
      </button>
      <UploadFile authToken={authToken} />
    </div>
  );
};

export default AdminPanel;
