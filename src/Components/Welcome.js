import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import MyNavBar from './MyNavBar';
import Sample1 from './Sample1';
import Sample2 from './Sample2';

function Welcome() {

    return (

        <div>
        <MyNavBar />

        <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Sample2 />}>
          <Route index element={<Sample1 />} />
          <Route path="blogs" element={<Sample1 />} />
          <Route path="contact" element={<Sample1 />} />
          <Route path="*" element={<Sample1 />} />
        </Route>
      </Routes>
    </BrowserRouter>



    
        </div>

    );


}

export default Welcome;