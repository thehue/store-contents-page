import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import rootReducer from './modules';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const store = configureStore({
  reducer: rootReducer,
});

if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
