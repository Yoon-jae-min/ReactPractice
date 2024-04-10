class Hello extends React.Component{
    render(){
        return <div>Hello {this.props.toWhat}</div>;
    }
}

let root = document.getElementById('root');
ReactDOM.render(<Hello toWhat="World" />, root);