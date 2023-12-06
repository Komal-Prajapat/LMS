import React, { useState } from 'react';

const Html = () => {
  const [details, setDetails] = useState("HTML stands for HyperText Markup Language");

  const handleButtonClick = (id) => {
    switch (id) {
      case 1:
        setDetails("HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages.");
        break;
      case 2:
        setDetails("Introduction to HTML. HTML documents are made up of HTML elements. An HTML element is defined by a start tag, content, and an end tag.");
        break;
      case 3:
        setDetails("Table in HTML. HTML tables allow web developers to arrange data into rows and columns.");
        break;
      case 4:
        setDetails("HTML Forms. HTML forms are used to collect user input. Forms can contain various elements like text fields, radio buttons, checkboxes, and more.");
        break;
      default:
        setDetails("Default information");
    }
  }

  return (
    <>
      <div className="container flex">
        <div className="topic  w-[25%]  bg-blue-400  p-3">


          <button onClick={() => handleButtonClick(1)} className=' hover:bg-blue-800'>Basic of HTML</button><br />
          <button onClick={() => handleButtonClick(2)} className=' hover:bg-blue-800'>Basic of Introduction</button><br />
          <button onClick={() => handleButtonClick(3)} className=' hover:bg-blue-800'>Table</button><br />
          <button onClick={() => handleButtonClick(4)} className=' hover:bg-blue-800'>Form</button><br />
        <button onClick={()=>handleButtonClick(5)} className=' hover:bg-blue-800'></button>


        </div>
        <div className="details w-[70%] m-2" id='1' >
          {details}
        </div>
      </div>
    </>
  );
}

export default Html;
