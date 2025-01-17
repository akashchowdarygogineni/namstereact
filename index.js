let a=React.createElement("h1",{id:"one",xyz:"two"},"hello this is react");
console.log(a);//it gives output kas object
let b=ReactDOM.createRoot(document.getElementById('block'));
b.render(a);
