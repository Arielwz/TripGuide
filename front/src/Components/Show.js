import PropTypes from "prop-types";
import React from "react";

function Show (props) {

    const renderTrips = () => {
        // console.log(props.trips);
        // if (props.trips.success)
        // return props.trips.trips
        return (props.trips || [])
        .map((t) => (
        <div>

        <p>{t.name}</p>
        <img src = {t.img} />
        <p>{t.location}</p>
        <p>{t.content}</p>


        </div>))
    };

    return (
        <div className="col">
            <h1>Find your favorite trips!</h1>
            {renderTrips()}
        </div>
    )
}

Show.propTypes = {
    props: PropTypes.array,
};

export default Show;