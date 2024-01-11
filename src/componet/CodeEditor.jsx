import React, { useState } from 'react';

const CodeEditor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  const run = () => {
    const output = document.getElementById('output');
    if (output) {
      output.contentDocument.body.innerHTML = htmlCode + '<style>' + cssCode + '</style>';
      output.contentWindow.eval(jsCode);
    }
  };

  return (
    <div className="container  p-4 mt-[100px] w-full h-screen">
      <div className="left flex  bg-slate-300 p-3 space-x-2">
       <div className="htmlcode">
       <h1 className='text-2xl font-bold '>HTML</h1>
        <textarea
          id="htmlCode"
          value={htmlCode}
          onChange={(e) => setHtmlCode(e.target.value)}
          cols="30"
          rows="10"
          onKeyUp={run}
        ></textarea>
        </div>

        <div className="csscode">
        <h1 className='text-2xl font-bold '>CSS</h1>
        <textarea
          id="cssCode"
          value={cssCode}
          onChange={(e) => setCssCode(e.target.value)}
          cols="30"
          rows="10"
          onKeyUp={run}
        ></textarea>
        </div>
       
       <div className="jscode">
       <h1 className='text-2xl font-bold '>JS</h1>
        <textarea
          id="jsCode"
          value={jsCode}
          onChange={(e) => setJsCode(e.target.value)}
          cols="30"
          rows="10"
          onKeyUp={run}
        ></textarea>
        </div>

      </div>
      <div className="right bg-slate-400  ">
        <label htmlFor="output" style={{ marginLeft: '30px' }}>
         <h1 className='text-2xl font-bold'> Output</h1>
        </label>
        <iframe title="output" src=""  id="output" className="border-2 border-black h-[300px] ml-2">

        </iframe>
      </div>

    </div>
  );
};

export default CodeEditor;
