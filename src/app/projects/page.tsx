"use client";
import axios from 'axios';
import Editor from "@monaco-editor/react";
import { useState } from 'react';

// Add missing import statement for React library
import React from 'react';

function CodeEditor() {
  const [code, setCode] = useState("// Write your code here");
  const [output, setOutput] = useState("");
  const [defaultLanguage, setDefaultLanguage] = useState("javascript"); // Add state for default language

  const executeCode = async () => {
    try {
      const response = await axios.post('/api/execute', { code });
      setOutput(response.data.output);
    } catch (error) {
      console.error('Error executing code:', error);
      setOutput("Error executing code.");
    }
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDefaultLanguage(event.target.value);
  };

  return (
    <div>
      <div>
        <select value={defaultLanguage} onChange={handleLanguageChange}>
          <option value="javascript">JavaScript</option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          {/* Add more options for other programming languages */}
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
