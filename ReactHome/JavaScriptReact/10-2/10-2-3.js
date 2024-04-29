class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        }
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({
                time: new Date()
            })
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return <ul>
            <Item value={this.state.time.toLocaleString()}/>
            <Item value={this.state.time.toLocaleString()}/>
            <Item value={this.state.time.toLocaleString()}/>
        </ul>
    }
}

class Item extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: props.value
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value){
            this.setState({
                value: this.props.value
            })
        }
    }

    render() {
        return <li>{this.state.value}</li>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);