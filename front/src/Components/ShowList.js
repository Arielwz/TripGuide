import Show from "./Show";
import  {useState, useEffect} from "react";


export default function ShowList () {

    const [trips, setTrips] = useState([]);

    useEffect(
      () => {
        const fetchTrips =  async () => {
          const resRaw = await fetch("./getTrips");
          const _trips = await resRaw.json();
      
          setTrips(_trips);
        }
 
      fetchTrips();
    }, []);
  
    // const renderData = () => trips.map((n)=> <div key={n}>Names: {n}</div>)
    // const res = await resRaw.json();

  return (

    <Show trips={trips}/>
  )

}

