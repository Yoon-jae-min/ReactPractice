class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fruits: ['사과', '바나나', '배', '귤']
        }
    }

    render(){
        return <ul>{this.state.fruits.map((item) => {
            return<li>{item}</li>})}</ul>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);