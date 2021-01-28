import './App.css';

import { filterUniqueProductNames } from './uniqueProductNames'
import { thirtyDaysYouthAddonSkiPass } from './thirtyDaysYouthAddonSkiPass'
import { specificIdsAddonType } from './specificIdsAddonType'
import { filterSpecificProduct } from './filterSpecificProduct'
import { filterSkiPasses } from './filterSkiPasses'
import { allZones } from './allZones'

import skiSlopeData from './data/data.json'

function App() {



  return (
    <div className="main-wrapper">
      <h3>Ski passes</h3>
      <p>W pliku data.json znajduje się tablica z obiektami będącymi reprezentacją elementów potrzebnych do obsługi stoku narciarskiego. Wszystkie obiekty mozemy podzielić na dwie główne grupy - ski passy (czyli wejściówka na stok) oraz tzw. addony, czyli dodatki do ski passów, takie jak wypozyczenie sprzętu, wstęp na siłownię, itp. Wszystkie ski passy i addony mogą być przeznaczone dorosłym (powyzej 18 roku zycia), młodziezy (od 12 do 18 roku zycia) oraz dzieciom (osoby ponizej 12 roku zycia). Kazdy ze ski passów oraz addonów moze obowiązywać 1, 2, 3, 7 lub 30 dni. Dodatkowo istnieją tez karnety (Membership) na 6 miesięcy lub 12 miesięcy. </p>
      <h3>Taski:</h3>
      <h5>
        Wyświetl nazwy (productName) wszystkich istniejących addonów (np. Ski rental). Wyświetlone nazwy nie mogą się powtarzać. 
      </h5>
        <div>
          { filterUniqueProductNames(skiSlopeData, true) }
        </div>
      <h5>
        Wyświetl nazwy (productName) wszystkich ski passów (np. Day pass Youth Downhill 7 days). Wyświetlone nazwy nie mogą się powtarzać. 
      </h5>
        <div>
        { filterUniqueProductNames(skiSlopeData, false) }
        </div>
      <h5>
        Wyświetl wszystkie ski passy, które moze kupić piętnastolatek chcący być na stoku przez 30 dni. 
      </h5>
      <div>
        { thirtyDaysYouthAddonSkiPass(skiSlopeData, false, 'youth', 30) }
      </div>
      <h5>
        Wyświetl wszystkie addony, które moze kupić piętnastolatek chcący być na stoku przez 30 dni. 
      </h5>
      <div>
      { thirtyDaysYouthAddonSkiPass(skiSlopeData, true, 'youth', 30) }
      </div>
      <h5>
        Wyświetl wszystkie addony, które mozna dokupić do ski passa o id BZrG9132UGjtS2gCRk4J9UG3jBZ. 
      </h5>
      <div>
        { specificIdsAddonType(skiSlopeData, 'BZrG9132UGjtS2gCRk4J9UG3jBZ') }
      </div>
      <h5>
        Wyświetl produkt przeznaczony dla osoby dorosłej, wazny przez 7 dni w strefie Dwonhill. 
      </h5>
      <div>
        {
          filterSpecificProduct(skiSlopeData, 7, 'downhill', 'adult')
        }
      </div>
      <h5>Napisz funkcję, która po podaniu strefy oraz czasu trwania (zone i duration) zwróci obiekt ze ski passami, które będą miały taką samą strefę oraz czas trwania, ale jedna z nich będzie przeznaczona dla dorosłego, a druga dla osoby młodej. </h5>
      <div>
        { filterSkiPasses(skiSlopeData, 'downhill', 30) }
      </div>
      <h5>Wyświetl wszystkie strefy, które występują na stoku (downhill, itp.) bez powtarzania.</h5>
      <div>
        { allZones(skiSlopeData) }
      </div>
    </div>
  );
}

export default App;
