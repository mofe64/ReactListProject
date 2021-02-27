import Skill from './skill';
import './css/cardRight.css'
const CardRight = ({skills=[{name: "test"}, {name: "test2"}]}) =>
    <div className="cardRight">
        {(skills.length === 0) ?
        <p>No Skills Yet</p> :
        skills.map((skill, i) => 
            <Skill key= {i} {...skill}/>
        )    
    }
    </div>

export default CardRight;