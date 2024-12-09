import React from 'react';
import axios from 'axios';

interface UploadFileProps {
  authToken: string;
}

const UploadFile: React.FC<UploadFileProps> = ({ authToken }) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (event.target.files) {
      formData.append('file', event.target.files[0]);

      axios.post('/upload', formData, {
        headers: { Authorization: authToken }
      })
        .then(response => console.log(response.data))
        .catch(error => console.error('Upload error', error));
    }
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileUpload} 
        className="mb-2 p-2 border border-gray-300 rounded w-64"
      />
    </div>
  );
};

export default UploadFile;
