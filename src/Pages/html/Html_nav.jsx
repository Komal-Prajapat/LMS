import React from "react";
import SmoothScroll from "smooth-scroll";
import CodeEditor from "../../componet/CodeEditor";
import { Link } from "react-router-dom";
import Basic from "./Basic";

const Html_nav = () => {
  return (
    <>
      <div className="container  flex ">
        <div className="nvbar bg-black  w-[200px] mt-16 h-[100vh] text-white fixed p-2  ">
          <nav className="">
            <ul>
              <ul>
                <li className="mt-3 text-lg font-bold  ">
                  <a href="#introduction">Introduction</a>
                </li>
                <li className="mt-3 text-lg font-bold  ">
                  <a href="#html-basics">HTML Basics</a>
                  <ul>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-structure">HTML Structure</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-elements">HTML Elements</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-tags">HTML Tags</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-attributes">HTML Attributes</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-doctype">HTML Doctype</a>
                    </li>
                  </ul>
                </li>
                <li className="mt-3 text-lg font-bold  ">
                  <a href="#html-text">Text in HTML</a>
                  <ul>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-headings">Headings</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-paragraphs">Paragraphs</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-formatting">Text Formatting</a>
                    </li>
                  </ul>
                </li>
                <li className="mt-3 text-lg font-bold  ">
                  <a href="#html-links">HTML Links</a>
                  <ul>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-anchor">Anchor (a) Element</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-links-attributes">Link Attributes</a>
                    </li>
                    <li className="mt-3 text-lg font-bold  ">
                      <a href="#html-navigation">Navigation</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </ul>
          </nav>
        </div>

        <div className="data ">
          <div
            className="data mt-[100px] p-2 pl-4 ml-[210px]  bg-slate-100 shadow-2xl"
            id="introduction"
          >
            <h1 className="text-3xl font-bold">What is HTML?</h1>

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

          <div id="html-basics">
          <Basic></Basic>
          </div> 
        

        </div>
      </div>
    </>
  );
};

export default Html_nav;
