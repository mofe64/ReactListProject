import './css/cardLeft.css'
const CardLeft = ({ cohortName, fullname, nickname}) =>
    <div className="cardLeft">
        <div className="cardLeft-top">
            <p>Cohort Five : { cohortName }</p>
        </div>
        <div className="cardLeft-middle">
            <p>{ fullname }</p>
        </div>
        <div className="cardLeft-bottom">
            <p>{ nickname }</p>
        </div>
    </div>

export default CardLeft;
    