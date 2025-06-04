import React from 'react';
import "./listPage.scss";
import { listData } from '../../lib/dummyData.js'
import Filter from '../../components/Filter/Filter.jsx';
import Card from '../../components/Card/Card.jsx';
import Map from '../../components/Map/Map.jsx';

const ListPage = () => {
  
  // all data used
  const data = listData;

  return (
    <div className='listPage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          {data.map(item => (
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map data={data}/>
      </div>
    </div>
  )
}

export default ListPage