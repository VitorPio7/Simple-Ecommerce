import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import './index.css';
import { store } from "./components/store/index"
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
