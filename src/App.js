import './App.css';

import React, {useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress,setProgress]= useState(0)
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}

      />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  key="General" pageSize={pageSize} country="in" category="General" />} />
            <Route exact path="/Business" element={<News setProgress={setProgress} apiKey={apiKey}  key="Business" pageSize={pageSize} country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  key="Entertainment" pageSize={pageSize} country="in" category="Entertainment" />} />
            <Route exact path="/Health" element={<News setProgress={setProgress} apiKey={apiKey}  key="Health" pageSize={pageSize} country="in" category="Health" />} />
            <Route exact path="/Sports" element={<News setProgress={setProgress} apiKey={apiKey}  key="Sports" pageSize={pageSize} country="in" category="Sports" />} />
            <Route exact path="/Technology" element={<News setProgress={setProgress} apiKey={apiKey}  key="Technology" pageSize={pageSize} country="in" category="Technology" />} />
            <Route exact path="/Science" element={<News setProgress={setProgress} apiKey={apiKey}  key="Science" pageSize={pageSize} country="in" category="Science" />} />
          </Routes>
        </Router>
      </div>
    )
  
}
export default App;