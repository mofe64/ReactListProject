import CardLeft from './cardLeft';
import CardRight from './cardRight';
import './css/card.css'
const Card = ({cohortName, fullname, nickname, skills}) => 
    <div className="card">
        <CardLeft  cohortName={cohortName} fullname={fullname} nickname={nickname} ></CardLeft>
        <CardRight skills={skills}></CardRight>
    </div>
    

export default Card;
