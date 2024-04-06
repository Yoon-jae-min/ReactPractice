class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fruits: ['사과', '바나나', '귤', '배']
        }
    }

    render(){
        let list = this.state.fruits.map((item) => {
            return <li>{item}</li>
        })

        return <ul>{list}</ul>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);