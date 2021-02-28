import ContainerHeader from './containerHeader';
import CardHolder from './cardHolder';
import { Component } from 'react';
import nativeData from './data'


class Container extends Component {
    constructor(props) {
        super(props)
        this.state = nativeData;
    }
    render() {
        const { natives } = this.state;
        return (
            <div className="container">
                <ContainerHeader></ContainerHeader>
                <CardHolder natives={ natives }></CardHolder>
            </div>
        )
    }
    
}
export default Container;