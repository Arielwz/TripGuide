import Show from "./Show";
import  {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {Pagination} from "element-react";
import 'element-theme-default';

const ShowList =  function ShowList (props) {

    const [trips, setTrips] = useState([]);
   
    useEffect(
      () => {
        const fetchTrips =  async () => {
          const response = await fetch(`/getTrips?searchKey=${props.searchKey}&page=${page}`);
          const res = await response.json();
          if (res && res.success) {
            setTrips(res.trips);
          }
        }
 
      fetchTrips();
    }, [props.searchKey,page]);

    useEffect(() => {
      const fetchCount = async () => {
        const resRaw = await fetch("./countData");
        const _count = await resRaw.json();
        setCount(_count);
      };
      fetchCount();
    }, []);
  
    // const renderData = () => trips.map((n)=> <div key={n}>Names: {n}</div>)
    // const res = await resRaw.json();

  return (

    <div>
      <label htmlFor="trip-select">Filter trips:</label>
      <select
        name="trips"
        id="trips-select"
        onChange={(e) => {
          setSelectedTrip(e.target.value);
        }}
      >
        <option value="all">All</option>
        {trips?.trips?.map((trip) => (
          <option key={trip} value={trip.name}>
            {trip.name}
          </option>
        ))}
      </select>
      <Show trips={trips} selectedTripObj={selectedTripObj} />
      <div className="first">
        <div className="block">
          <Pagination
            layout="prev, pager, next"
            total={count.amount}
            pageSize={3}
            onCurrentChange={(e) => setPage(e)}
          />
        </div>
      </div>

      {/* <Pagination
      total={total}
      page={page}
      onChangePage={setPage}
    ></Pagination>
      <Count count={reload} /> */}
    </div>
  )

}

ShowList.propTypes = {
  searchKey: PropTypes.string
};

export default ShowList;

