class App extends React.Component{
    render(){
        return <ul>
            <Item value="Item 컴포넌트 1번"/>
            <Item value="Item 컴포넌트 2번"/>
            <Item value="Item 컴포넌트 3번"/>
        </ul>
    }
}

class Item extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <li>{this.props.value}</li>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);