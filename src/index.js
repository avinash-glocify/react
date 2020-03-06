import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import routing from './Routes/Routing.js';


ReactDOM.render(routing, document.getElementById('root'));


serviceWorker.unregister();
