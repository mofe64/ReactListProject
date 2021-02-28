import ContainerHeader from './containerHeader';
import CardHolder from './cardHolder';
import { Component } from 'react';
import nativeData from './data'



class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            natives: []
        };
    }
    componentDidMount() {
        this.setState({ loading: true })
        setInterval(() => {
            this.setState({ natives: nativeData },
            this.setState({loading: false}))
        },3000)
    }

    render() {
        const { loading ,natives } = this.state;
        return (
            <div className="container">
                <ContainerHeader></ContainerHeader>
                    <CardHolder natives={ natives } loading={loading}></CardHolder>
            </div>
        )
    }
    
}
export default Container;