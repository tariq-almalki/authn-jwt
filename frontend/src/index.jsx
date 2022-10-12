import { createRoot } from 'react-dom/client';
import { Router } from './components/Router/Router.jsx';
import './base-styles.css';

const root = createRoot(document.getElementById('root'));
root.render(<Router />);
