function MyButton(props){
    let [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button',
        {onClick: () => setIsClicked(true)},
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

let domContainer = document.querySelector('#root');
let root = ReactDOM.createRoot(domContainer);

root.render(React.createElement(MyButton));