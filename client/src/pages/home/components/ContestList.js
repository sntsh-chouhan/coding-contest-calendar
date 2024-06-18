import React, { useEffect, useState } from 'react';
import './css/ContestList.css'
import log from '../../../images/platformLogo.png';
import {fetchAllData} from '../../../services/middleware/ContestFetch';

const ContestList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const result = await fetchAllData();
        setData(result);
        };

        fetchData();
    }, []);

    const sortedData = data.sort((a, b) => new Date(a.time) - new Date(b.time));


    return ( 
        <div className="List-root">
            <h2>happy coding ;)</h2>
            <div className="event-main">
                {sortedData.map((item) => (
                    <div key={item.id}>
                        <h3>heading {item.name}</h3>
                        <p>{item.host}</p>
                    {/* <p>{new Date(item.time).toLocaleString()}</p> */}
                    </div>
                ))}
                {/* <div className="platform-logo">
                    <img src={log} alt="" />
                </div>
                <div className="event-details">
                    <p>time: 16/06/2024</p>
                    <h3>Contest Name</h3>
                    <p>duration: 120 mins</p>
                </div>
                <div className="event-action">
                    <p>starts in: some time</p>

                </div> */}
            </div>
        </div>
     );
}
 
export default ContestList;