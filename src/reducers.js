// redux/reducers.js
import { combineReducers } from 'redux';


// Importez vos réducteurs de base ici si nécessaire
// import languageProviderReducer from './containers/LanguageProvider/reducer';
// import globalReducer from './containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    // Ajoutez des réducteurs de base ici si nécessaire
    // language: languageProviderReducer,
    // global: globalReducer,
    ...injectedReducers, // Injecte les réducteurs dynamiques
  });
}