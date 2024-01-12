import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockData from '../../resources/moc/mockData';
import Main from '../Main/Post';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {   
    const mock = new MockAdapter(axios);

    mock.onGet('/').reply(200, mockData);
    
    axios.get('/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Errore durante la chiamata API simulata', error);
      });
   
    return () => mock.restore();
  }, []);

  return (
    <div className='container-post'>
        
        {data.map(item => <Main title={item.title} preview={item.preview} body={item.body} categories={item.categories}/>)}

    </div>
  );
};


export default ApiComponent;