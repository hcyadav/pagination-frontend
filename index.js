import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from "./Sdata.json"




ReactDOM.render(
  <>
    <h1 className="h">TODAY's TOP NEWS</h1>
    {data.map((val) => {
      return (
        <div className="card">
          <div className="title">
            <div className="latest">
              <h2>Latest News</h2>
            </div>
            
            <h4>{val.title}</h4>
            
            <a href={val.link} target="_blank">
              <button>Watch now</button>
            </a>
          </div>
        </div>
      )
    })
    }


    <App />
  </>,
  document.getElementById('root')
);


