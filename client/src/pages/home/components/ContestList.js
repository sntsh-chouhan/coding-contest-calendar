import './css/ContestList.css'
import log from '../../../images/platformLogo.png';

const ContestList = () => {
    return ( 
        <div className="List-root">
            <h2>happy coding ;)</h2>
            <div className="event-main">
                <div className="platform-logo">
                    <img src={log} alt="" />
                </div>
                <div className="event-details">
                    <p>time: 16/06/2024</p>
                    <h3>Contest Name</h3>
                    <p>duration: 120 mins</p>
                </div>
                <div className="event-action">
                    <p>starts in: some time</p>

                </div>
            </div>
        </div>
     );
}
 
export default ContestList;