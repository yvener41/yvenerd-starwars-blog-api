import React from "react";

const PlanetCard = ({ uid, name, url }) =>{

       return (

              <>
               
               <div className="col-3">
                    <div className="card" style={{ width: "11rem"}}>
                       <img src={uid === "1"
                       ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                       : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`      
                       } 
                       className="card-img-top" alt={name} />
                         <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                       </div>
                       </div>
                
              </>
       );
}

export default PlanetCard;

