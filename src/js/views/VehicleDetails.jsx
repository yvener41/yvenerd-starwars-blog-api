import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const VehicleDetails = () => {
	const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() =>{
        actions.getVehicleDetails(params.id)
    }, [])

	return (
						<div className="jumbotron row align-items-md-stretch">
				<div className="col-md-6">
				<div className="h-100 p-5 text-bg-dark">
					<img src="https://cdn.wallpapersafari.com/2/29/fdr5Z7.jpg" className="w-100" />
				</div>
				</div>
				<div className="col-md-6">
				<div className="h-100 p-5 bg-body-tertiary">
				<h1 className="display-4 fw-bold">{store.vehicleDetails.properties.name}</h1>
					<p className="fs-3">Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
							<Link to="/">
								<span className="btn btn-primary btn-lg d-flex justify-content-center" href="#" role="button">
								Back home
							</span>
							</Link>     
				</div>
				</div>
				</div>

	);
};
 
export default VehicleDetails;

VehicleDetails.propTypes = {
	match: PropTypes.object
};
