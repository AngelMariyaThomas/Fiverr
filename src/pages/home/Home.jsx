import React from 'react';
import"./Home.scss";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/Slide/Slide';
import { cards, projects } from '../../data';
import CatCard from '../../components/catCard.jsx/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home=()=> {
  return (
    <div className='home'>
      <Featured/>
      <TrustedBy/>
     <Slide slidesToShow={5} arrowScroll={5}>
      {cards.map(card=>(
        <CatCard key={card.id} item={card}/>

      ))}
     </Slide>
     <div className="features">
      <div className="container">
        <div className="item">
          <h1>A whole world of freelance talent at your fingertips</h1>
          <div className="title">
            <img src='./image/check.png' alt=''/>
            The best for every budget
          </div>
           <p>
           Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
           </p>
           <div className="title">
            <img src='./image/check.png' alt=''/>
            The best for every budget
          </div>
           <p>
           Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
           </p>
           <div className="title">
            <img src='./image/check.png' alt=''/>
            The best for every budget
          </div>
           <p>
           Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
           </p>
           <div className="title">
            <img src='./image/check.png' alt=''/>
            The best for every budget
          </div>
           <p>
           Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
           </p>
           
        </div>
        
        
        <div className="item">
          <video src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" controls poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"></video>
        </div>
      </div>
     </div>


     <div className="features dark">
      <div className="container">
        <div className="item">
         <h1>fiverr business</h1>
         <h1>A solution built for business</h1>
           <p>
           Upgrade to a curated experience to access vetted talent and exclusive tools
           </p>
           <div className="title">
            <img src='./image/check.png' alt=""/>
            Talent matching
           </div>
           <div className="title">
            <img src='./image/check.png' alt=""/>
            Dedicated account management
           </div>

           <div className="title">
            <img src='./image/check.png' alt=""/>
            Team collaboration tools
           </div>
           <div className="title">
            <img src='./image/check.png' alt=""/>
            Business payment solutions
           </div>
              <button>Explore Fiverr Business</button>

        </div>
        <div className="item">
          <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-836-x1.png" alt=''/>
        </div>
      </div>
     </div>

     <Slide slidesToShow={4} arrowScroll={4}>
      {projects.map(card=>(
        <ProjectCard key={card.id} item={card}/>

      ))}
     </Slide>
    </div>
  )
}

export default Home