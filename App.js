import { PaperProvider } from 'react-native-paper';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import { store } from './Redux-Store/combineReducers';
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Navigation />
      </PaperProvider>
    </Provider>
  );
}
