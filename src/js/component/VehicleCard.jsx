import React from "react";

const VehicleCard = ({ uid, name, url }) =>{

       return (

              <>

                     <div className="col-3">
                    <div className="card" style={{ width: "11rem"}}>
                       <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} className="card-img-top" alt={name} />
                         <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                       </div>
                       </div>
              </>
       );
}

export default VehicleCard;