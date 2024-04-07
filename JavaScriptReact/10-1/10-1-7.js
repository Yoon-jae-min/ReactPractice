class Test extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0
        }
    }

    render(){
        return <div>
            <h1>클릭한 횟수: {this.state.count}</h1>
            <button onClick={(e) => this.countUp(e)}>클릭</button>
        </div>
    }

    countUp(event){
        this.setState({
            count: this.state.count + 1
        })
    }
}

let root = document.getElementById('root');
ReactDOM.render(<Test/>, root);