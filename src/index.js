import {createRoot} from 'react-dom/client'

import App from './App';

// Update to Client Rendering API by using createRoot
const conatiner = document.getElementById('root');
const root = createRoot(conatiner);
root.render(<App />);