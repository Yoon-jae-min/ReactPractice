function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

let user = {
    firstName: 'Inje',
    lastName: 'Lee'
};

let element = <h1>Hello, {formatName(user)}</h1>;

let root = document.getElementById('root');
ReactDOM.render(element, root);