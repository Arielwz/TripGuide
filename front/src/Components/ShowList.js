import Show from "./Show";
import  {useState, useEffect} from "react";
import PropTypes from 'prop-types';

const ShowList =  function ShowList (props) {

    const [trips, setTrips] = useState([]);
   
    useEffect(
      () => {
        const fetchTrips =  async () => {
          const response = await fetch(`/getTrips?searchKey=${props.searchKey}`);
          const res = await response.json();
          if (res && res.success) {
            setTrips(res.trips);
          }
        }
 
      fetchTrips();
    }, [props.searchKey]);
  
    // const renderData = () => trips.map((n)=> <div key={n}>Names: {n}</div>)
    // const res = await resRaw.json();

  return (

    <Show trips={trips}/>
  )

}

ShowList.propTypes = {
  searchKey: PropTypes.string
};

export default ShowList;

