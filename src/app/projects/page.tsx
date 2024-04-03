"use client";
import axios from 'axios';
import Editor from "@monaco-editor/react";
import { useState } from 'react';
import React from 'react';

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [defaultLanguage, setDefaultLanguage] = useState("python"); // Add state for default language

  const executeCode = async () => {
    try {
      const response = await axios.post('/api/execute', { code });
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error executing code:', error);
      setOutput("Couldn't recieve code from server.");
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDefaultLanguage(event.target.value);
  };

  return (
    <div>
      <div>
        <select value={defaultLanguage} onChange={handleLanguageChange}>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
          <option value="javascript">Javascript</option>
        </select>
      </div>
      <Editor
        height="50vh"
        defaultLanguage={defaultLanguage}
        value={code}
        onChange={(value: string | undefined) => setCode(value || "")}
      />
      <button onClick={executeCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
}

export default CodeEditor;
