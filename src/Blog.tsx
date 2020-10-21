import React from 'react';
import ReactDOM from 'react-dom';
import { Interface } from 'readline';

interface BlogPostProps{
    name:string;
    link:string;
    imgsrc:string;
    desc:string;
     children:any;
}

export const Blog = (props:BlogPostProps) => {
    return(
        <>
        
        <div className="blogs">
      <div className="blog">
        
        <img src={props.imgsrc} alt = "myPic" className="blog_img" />
        <div className="blog__info">
         <h2 className="blog__title">{props.name}</h2>
         <div className="blog__desc">{props.desc}</div>
        <a href={props.link} target="_blank"><br/>
            <button>Know More</button>
          </a>
        </div> 
      </div>
    </div>
    </>
    )
}