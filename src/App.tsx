import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Blog} from "./Blog"
import Data from './Data';

function blogpost(val:any)
{
  return(
<Blog
  imgsrc={val.imgsrc}
  name={val.name}
  desc={val.desc}
  link={val.links}>
</Blog>
  );
}

export const App=()=> {
  return (
    <>
    
    <div className="header">
      <div className="blog__head"><h2>FOOD BLOG</h2></div>
    </div>

    {Data.map(blogpost)}
    
    </>
  );
}

export default App;
