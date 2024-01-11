import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container mt-[100px] m-auto shadow-xl bg-slate-400 p-3">
        <div className="flex justify-between">
          <div className="w-[300px] h-[300px] mr-2 relative overflow-hidden shadow-2xl">
            <Link to="/html">
              <div
                className="html w-full h-full"
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_640.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h1 className="text-2xl font-bold text-center">
                  HTML
                </h1>
              </div>
            </Link>
          </div>

          <div className="w-[300px] h-[300px] relative overflow-hidden">
            <Link to="/css">
              <div
                className="html w-full h-full"
                style={{
                  backgroundImage:
                    "url(https://cdn.pixabay.com/photo/2018/05/08/21/28/html5-3384014_640.png)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold ">
                  CSS
                </h1>
              </div>
            </Link>
          </div>
          
        
        </div>
      </div>
    </>
  );
};

export default Home;
