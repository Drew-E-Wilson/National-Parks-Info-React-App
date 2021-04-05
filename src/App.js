import { Link, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ParkList from './Components/ParkList'
import ParkDetail from './Components/ParkDetail';
// import parkData from './parks.json';
import './App.css';
function App() {
  const [parkData, setParkData] = useState([]);
  const getParkData = async () => {
    try {
      const res = await fetch("https://developer.nps.gov/api/v1/parks/?api_key=WD5PtZivK9iCeDMsMfwNGhn7KeGfdlRn9jfP3m0K");
      const data = await res.json();
      setParkData(data.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getParkData();
  }, []);
  return (
    <div className="App">
      <nav>
        <Link to="/">National Parks List</Link>
      </nav>
      <main>
        {/* <Route exact path="/" render={() => <ParkList parkData={parkData} />} />
        <Route path="/park/:id" render={routerProps => {
          // return <ParkDetail routerProps={routerProps} />
          const park = [...parkData].filter(
            (p) => p.id === routerProps.match.params.id
          );
          return <ParkDetail {...routerProps} park={park[0]} />
        }} /> */}
      </main>
    </div>
  );
}
export default App;
