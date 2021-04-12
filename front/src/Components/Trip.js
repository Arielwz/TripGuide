const arr =[];

function add(t){
    arr.push(t);
    localStorage.setItem("saveTrip",JSON.stringify(arr));
    let a=JSON.parse(localStorage.getItem("saveTrip"))
    
}

function Trip ({ trip }) {
    return (
        <div className="container">    
            <div className="card" id="card-info">
            <img className="card-img-top" src = {trip.img} alt="Card image cap"/>
            <h5 className="card-title">{trip.name}</h5>
            <p className="card-text">Location:{trip.location}</p>
            <p>{trip.content}</p>
            <p>Tags:{trip.tag}</p>
            </div>
            <button className="btn btn-primary" onClick={() => add(trip)}>save</button>
        </div>
    )
}



export default Trip;