import './css/cardHolder.css'
import Card from './card';

const CardHolder = ({natives=[]}) => 
    <div className="cardHolder">
        {(natives.length === 0)?
            <p>No Native Details</p> :
            natives.map((native, i) =>
                <Card key={i} {...native} />
                )
                
        
        }
    </div>
export default CardHolder;