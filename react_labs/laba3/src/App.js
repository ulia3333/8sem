import PhoneNumberFormatter from './components/PhoneNumberFormatter';
import SortTable from './components/SortTable';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Форматёр номеров телефона</h1>
    <PhoneNumberFormatter />
    <h1>Каталог товаров</h1>
    <SortTable/>
  </div>
  );
}

export default App;
