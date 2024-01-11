import React from 'react'
import { Link } from 'react-router-dom'
const Basic = () => {
  return (
    <div>
                <div
            className="data p-2 pl-4 ml-[210px]  bg-slate-100 shadow-2xl"
            id="introduction"
          >
            <h1 className="text-3xl font-bold">Basic Of HTML</h1>

            <ol>
              <li className="text-lg">
                HTML stands for Hyper Text Markup Language
              </li>
              <li className="text-lg">
                HTML is the standard markup language for creating Web pages
              </li>
              <li className="text-lg">
                HTML describes the structure of a Web page
              </li>
              <li className="text-lg">HTML consists of a series of elements</li>
              <li className="text-lg">
                HTML elements tell the browser how to display the content
              </li>
              <li className="text-lg">
                HTML elements label pieces of content such as "this is a
                heading", "this is a paragraph", "this is a link", etc.
              </li>
             
            </ol>

            <div className="firstcode bg-slate-300 p-2 text-xl font-bold">
              &lt; !Doctype &gt; <br />
              &lt; HTML &gt;
              <br />
              &lt; Head &gt;
              <br />
              &lt; title &gt; This is My First HTML Project &lt;/ title &gt;
              <br />
              &lt;/head &gt;
              <br />
              &lt;body &gt;
              <br />
              &lt;h1 &gt;My First Heading &lt;/ h1 &gt;
              <br />
              &lt;/ HTML &gt;
            </div>

            <Link to="/codeEditor">
              <button className="bg-slate-400 p-3 rounded mt-3">
                Try It Self{" "}
              </button>
            </Link>

          </div>
    </div>
  )
}

export default Basic
