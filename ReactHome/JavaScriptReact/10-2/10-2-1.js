class App extends React.Component{
    render(){
        return <ul>
            <Item/>
            <Item/>
            <Item/>
        </ul>
    }
}

class Item extends React.Component{
    render(){
        return <li>Item 컴포넌트</li>
    }
}

let root = document.getElementById('root');
ReactDOM.render(<App/>, root);