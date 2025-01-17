/*
*<div id="block1">
<div id="block2">
<h1>hello world</h1>
<h2>hello world</h2>
</div>
</div>
<div id="block1">
<div id="block2">
<h1>hello world</h1>
<h2>hello world</h2>
</div>
</div>
*
*/
let a=[React.createElement('div',{id:"block1"},
    React.createElement('div',{id:"block2"},
   [React.createElement('h1',{},"hello world"),
    React.createElement('h2',{},"hello world")] )),
    React.createElement('div',{id:"block1"},
    React.createElement('div',{id:"block2"},
   [React.createElement('h1',{},"hello world"),
    React.createElement('h2',{},"hello world")] ))];

let b=ReactDOM.createRoot(document.getElementById('block'));
b.render(a);
//so in these way we can create the nested html in react