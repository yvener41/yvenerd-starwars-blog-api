import React from "react";
import { Link } from "react-router-dom";

const VehicleCard = ({ uid, name, url }) =>{

       return (

              <>

                     <div className="col-3">
                    <div className="card" style={{ width: "11rem"}}>
                       <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt={name} />
                         <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <Link to={`/vehicles/${uid}`}>
                                <button className="btn btn-primary">
                                   Learn More
                            </button>
                            </Link>
                    </div>
                       </div>
                       </div>
              </>
       );
}

export default VehicleCard;