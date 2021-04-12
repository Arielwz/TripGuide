import PropTypes from "prop-types";
import React from "react";
import Trip from "./Trip";


function Show(props) {

    return props.trips ? (
        <div className="container"> 
        <div className="row">
        <div className="col-6 col-sm">
            <h1>Find your favorite trips!</h1>
            <div className="col" id="card-display">
                {
                    props.selectedTripObj ?
                    <Trip trip={props.selectedTripObj}/> :
                        props.trips.map(t => 
                        (
                        <div className="row">
                        <div className="col-6 col-sm">
                        <Trip key={t} trip={t}/>`
                        </div>
            </div>)
            )
            }
        </div>
        </div> 
        </div>
        </div> 
    ) : null
}

Show.propTypes = {
    props: PropTypes.array,
};

export default Show;
