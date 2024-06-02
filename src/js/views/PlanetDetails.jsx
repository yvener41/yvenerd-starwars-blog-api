import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = (props) => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPlanetDetails(id);
  }, []);

  return (
    <div className="">
      {store.planetDetails ?
        <div className="container-fluid d-flex align-items-center justify-content-center">
          {store.planetDetails && (
            <>
              <div className="card mb-3" style={{ width: "90%", height: "100%" }}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={
                      id === "1"
                        ? "data:image/jpeg;base64,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"
                        : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
                    }
                      className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title text-color">{store.planetDetails.properties.name}</h3>
                      <p className="card-text text-color fs-4">Terrain: {store.planetDetails.properties.terrain}</p>
                      <p className="card-text text-color fs-4">Population: {store.planetDetails.properties.population}</p>
                      <p className="card-text text-color fs-4">Climate: {store.planetDetails.properties.climate}</p>
                      <p className="card-text text-color fs-4">Diameter: {store.planetDetails.properties.diameter}</p>
                      <p className="card-text text-color fs-4">Days in 1 Year: {store.planetDetails.properties.orbital_period}</p>
                      <p className="card-text text-color fs-4">Hours in 1 day: {store.planetDetails.properties.rotation_period}</p>
                      <p className="card-text text-color fs-4">Gravity: {store.planetDetails.properties.gravity}</p>
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

export default PlanetDetails;

PlanetDetails.propTypes = {
  match: PropTypes.object,
};