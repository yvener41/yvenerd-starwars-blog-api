import React from "react";

const PeopleCard = ({ name }) =>{

       return (

              <>
                    <div className="card" style={{ width: "18rem"}}>
                       <img src="" className="card-img-top" alt="" />
                         <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                       </div>
              </>
       );
}

export default PeopleCard;