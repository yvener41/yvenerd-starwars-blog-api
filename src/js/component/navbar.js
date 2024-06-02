import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { actions, store } = useContext(Context)
	return (
		<>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<Link to="/">
						<img className="img border-0" src="https://loodibee.com/wp-content/uploads/Star-Wars-Logo-outlined.png" style={{ width: "100px" }}></img>
					</Link>
					<div className="ml-auto mx-3">
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav me-auto mb-2 mb-lg-0">
								<li className="nav-item dropdown">
									<a className="dropdown-toggle btn btn-outline-dark" href="#" role="button" data-bs-toggle="dropdown" style={{ width: "120px" }} aria-expanded="false">
										Favorites
									</a>
									<ul className="dropdown-menu">
										{store.favorites?.map((favorite, index) => (
											<li className="dropdown-item" key={index}>{favorite}
												<span onClick={() => actions.removeFavorite(favorite)}>
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
														<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
														<path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
													</svg>
												</span>
											</li>
										))}
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

