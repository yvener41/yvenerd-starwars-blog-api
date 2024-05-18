const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			  people: [],
			  vehicles:[],
			  planets: [],
			  favorites: []
		},
		actions: {
			  getPeople: async () => {
				 const response = await fetch("https://www.swapi.tech/api/people/");
				 if(!response.ok){
					 throw new Error(response.status, response.statusText);
				 }
				 const data = await response.json();
				 setStore({people: data.results})
			  },
			  getPeopleDetails: () => {},
			  getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/");
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				 setStore({vehicles: data.results})
			  },
			  getVehiclesDetails: () => {},
			  getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				 setStore({planets: data.results})
			  },
			  getPlanetsDetails: () => {},
			  addFavorite: () => {},
			  removeFavorite: () => {}
		}
	};
};

export default getState;
