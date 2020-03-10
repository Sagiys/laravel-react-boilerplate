import React from 'react';
import ReactDOM from 'react-dom';

function Boilerplate() {
    return (
        <div className='hello-world'>Hello&nbsp;world!</div>
    );
}

export default Boilerplate;

if (document.getElementById('app')) {
    ReactDOM.render(<Boilerplate />, document.getElementById('app'));
}
