const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			  people: [],
			  personDetails: {
				   description: "",
				   properties: {}
			  },

			  vehicles:[],
			  vehicleDetails:{
				description:"",
				properties:{}
			  },

			  planets: [],
			  planetDetails:{
				description:"",
				properties:{}
			  },

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

			  getPersonDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				const personDetails= {
					description: data.result.description,
					properties: {...data.result.properties}
				}

				setStore({personDetails: personDetails});
			  },


			  getVehicles: async () => {
				const response = await fetch("https://www.swapi.tech/api/vehicles/");
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				 setStore({vehicles: data.results})
			  },

			   getVehicleDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				const vehicleDetails= {
					description: data.result.description,
					properties: {...data.result.properties}
				}

				setStore({vehicleDetails: vehicleDetails});
			  },

			  getPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets/");
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				 setStore({planets: data.results})
			  },
			  getPlanetDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				if(!response.ok){
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				const planetDetails= {
					description: data.result.description,
					properties: {...data.result.properties}
				}

				setStore({planetDetails: planetDetails});
			  },

			  addFavorite: () => {},
			  removeFavorite: () => {}
		}
	};
};

export default getState;
