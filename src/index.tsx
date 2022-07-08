import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { contentsListApi } from './services/contentsList';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contentsListApi.middleware),
});

if (container) {
  const root = createRoot(container);
  root.render(
    <BrowserRouter basename={process.env.BASE_NAME}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}
