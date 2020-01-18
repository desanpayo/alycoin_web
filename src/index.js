import React from 'react';
import ReactDOM from 'react-dom';

import Alycoin from './component/Alycoin';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Alycoin />, document.getElementById('root'));
serviceWorker.unregister();
