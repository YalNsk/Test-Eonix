// redux/reducers.js
import { combineReducers } from 'redux';
import homeContainerReducer from './containers/HomeContainer/reducer';

// Importez vos réducteurs de base ici si nécessaire
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    // Ajoutez des réducteurs de base ici si nécessaire
    // language: languageProviderReducer,
    // global: globalReducer,
    homeContainer : homeContainerReducer,
    ...injectedReducers, // Injecte les réducteurs dynamiques
  });
}