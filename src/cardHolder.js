import './css/cardHolder.css'
import Card from './card';
import LoadingAnimation from './loadingAnimation'

const CardHolder = ({natives=[], loading=false}) => 
    <div className="cardHolder">
        {(loading)?
            <LoadingAnimation /> :
            (natives.length === 0)?
            <p>No Native Details</p> :
            natives.map((native, i) =>
                <Card key={i} {...native} />
                )
        }
    </div>
export default CardHolder;