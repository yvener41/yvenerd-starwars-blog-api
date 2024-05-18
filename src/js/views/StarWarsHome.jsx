import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PeopleCard from "../component/PeopleCard.jsx";

const StarWarsHome = () => {

    const { store, actions } = useContext(Context);

    return (

          <>
                   {store.people.map(person => {
                    return (
                        <PeopleCard key={person.uid} name={person.name} />
                    )
                   })}
                  
          </>
    );
}

export default StarWarsHome;