import React, { useState, useRef } from 'react';
import { Card, Button } from 'react-bootstrap';

const FileDropzone = () => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    saveFiles(files);
  };

  const handleChooseFiles = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    saveFiles(files);
  };

  const saveFiles = (files) => {
    // Process the dropped or selected files here
    // For demonstration purposes, let's log the file names
    Array.from(files).forEach((file) => {
      console.log(file.name);
    });
  };

  return (
    <Card
      className={`text-center ${isDragging ? 'dragging dashed-border-card' : ''}` }
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      bg="light "
      text="dark"
    >
      <Card.Body>
        <div className="mb-3 ">
          <input type="file" id="fileInput" multiple onChange={handleFileChange} style={{ display: 'none' }} ref={fileInputRef} />

          <Button variant="outline-primary" className="edge-button" onClick={handleChooseFiles}>
            Choose Files
          </Button>
        </div>
        <Card.Text>No files chosen</Card.Text>
        <Card.Text> or </Card.Text>
        <Card.Text>drop files here</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FileDropzone;
