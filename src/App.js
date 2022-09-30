
import './App.css';
import { CounterApp } from './EjercicioCinco/CounterApp';
import { SumaMultiplicacion } from './EjercicioCuatro/SumaMultiplicacion';
import { AñoComponent } from './EjercicioDos/AñoComponent';
import { Colores } from './EjercicioSeis/Colores';
import { InputText } from './EjercicioSiete/InputText';
import { FooterComponent } from './EjercicioUno/FooterComponent';
import { HeaderComponent } from './EjercicioUno/HeaderComponent';
import { NavBarComponent } from './EjercicioUno/NavBarComponent';
import { TablaCoches } from './TercerEjercicio/TablaCoches';


function App() {

  const multiplicacion = (a, b) =>{

   return a*b

  }

  


  return (
    <div className="App">

      <HeaderComponent title="Hola Mundo" />
      <NavBarComponent />
      <AñoComponent />
      <TablaCoches />
      <SumaMultiplicacion multiplicacion={multiplicacion} />
      <CounterApp/>
      <Colores/>
      <InputText/>
      <FooterComponent />


    </div>
  );
}

export default App;
