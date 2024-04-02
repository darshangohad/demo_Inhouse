import React, { useState } from 'react';
import axios from 'axios';  

const InternshipForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8000/auth/admin/uploadInternship', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      alert('Notice uploaded successfully!');
    } catch (error) {
      console.error('Error uploading notice:', error);
      alert('Failed to upload notice.');
    }
  };

  return (
    <div>
      <h2>Upload Internship Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default InternshipForm