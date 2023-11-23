import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import './Projects.css';

function Projects(){

  const [post, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/')
      .then(function(res){
        setPosts(res.data);
      });
  }, []);

  return(
    <section id="project">
      <h2>Meus <span>Projetos</span></h2>
      <div className="projetos">
        {
          post.map(function(val){
            return(
              // eslint-disable-next-line react/jsx-key
              <img src={val.image} alt="projetos"/>
            );
          })
        }
      </div>
    </section>
  );
}

export default Projects;
