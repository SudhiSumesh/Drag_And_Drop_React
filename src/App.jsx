import { useState } from 'react'
import { Dropzone, FileMosaic } from "@files-ui/react";
import './App.css'

function App() {
  
  const [files, setFiles] = useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  return (
    <>
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file) => (
        <FileMosaic {...file} preview />
      ))}
    </Dropzone>
    </>
  )
}

export default App
