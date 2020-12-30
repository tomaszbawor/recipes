import React from 'react';
import {render} from 'react-dom';
import Page from "./components/page/Page";

const App = () => (<div>
    <Page />
</div>);
render(<App/>, document.getElementById('root'));
