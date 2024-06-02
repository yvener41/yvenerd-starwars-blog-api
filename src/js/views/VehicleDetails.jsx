import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    actions.getVehicleDetails(id);
  }, []);

  return (
    <div className="">
      {store.vehicleDetails ?
        <div className="container-fluid d-flex align-items-center justify-content-center">
          {store.vehicleDetails && (
            <>
              <div className="card mb-3" style={{ width: "80%", height: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-color">{store.vehicleDetails.properties.name}</h3>
                      <p className="card-text text-color fs-4">Manufacturer: {store.vehicleDetails.properties.manufacturer}</p>
                      <p className="card-text text-color fs-4">Vehicle Class: {store.vehicleDetails.properties.vehicle_class}</p>
                      <p className="card-text text-color fs-4">Cost in Credits: {store.vehicleDetails.properties.cost_in_credits}</p>
                      <p className="card-text text-color fs-4">Vehicle Model: {store.vehicleDetails.properties.model}</p>
                      <p className="card-text text-color fs-4">Max Speed: {store.vehicleDetails.properties.max_atmosphering_speed}</p>
                      <p className="card-text text-color fs-4">Passengers: {store.vehicleDetails.properties.passengers}</p>
                      <p className="card-text text-color fs-4">Cargo Capacity: {store.vehicleDetails.properties.cargo_capacity}</p>
                    </div>
                  </div>
                </div>
              </div>


            </>
          )}
        </div>
        : <img src="">
        </img>}

      <Link to="/">
        <span className="btn btn-text-color btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

export default VehicleDetails;

VehicleDetails.propTypes = {
  match: PropTypes.object,
};