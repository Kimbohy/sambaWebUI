import { useEffect, useState } from "react";
import axios from "axios";

function FileExplorer() {
    const [files, setFiles] = useState([]);
    const [path, setPath] = useState("/");
    

  return (
    <div>
      <h2>File Explorer</h2>
      <div>
      </div>
      <ul>
        {files.map((file) => (
          <li key={file}>{file}</li>
        ))}
      </ul>
    </div>
  );
}

export default FileExplorer;