import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { StuntDoubleViewer } from './features/stuntDoubleReview';
import { configureStore } from './store';
import { theme } from './theme';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StuntDoubleViewer />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
