import React, { useState } from 'react';
import Director from '../js/classes/Director';
import CarBuilder from '../js/classes/car/CarBuilder';

const builer = new CarBuilder();
const director = new Director();

function CarsTable() {
  const [carList, setCarList] = useState([]);

  return (
    <div>
      <h1>Car list</h1>
      { carList.length > 0 ?      
      <span>
      <table>
        <thead>
            <tr>
              <td>Type</td>
              <td>Speed</td>
              <td>Color</td>
            </tr>
        </thead>
        <tbody align="center">
          {
            carList.map((e, i) => 
            <tr key={i} >
              <td>{e.type}</td>
              <td>{e.getSpeed()}</td>
              <td  bgcolor={e.color}>{e.color}</td>
            </tr>) 
          }
        </tbody>
      </table>
      <button onClick={() => {
          var tmp = [...carList];
          tmp.pop();
          setCarList(tmp)
        }}>
        Remove random car
      </button> 
      </span>
      : <div/>}
      <button onClick={() => setCarList([...carList, director.makeRandomCar(builer)])}>
        Create random car
      </button>
    </div>
  );
}

export default CarsTable;