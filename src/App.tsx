import { DataTable } from './components/DataTable'; 
import { obtenerFechaHoy } from './utils/formateo'; 

interface Entrenamiento {
  ejercicio: string;
  peso: number;
  reps: number;
}

function App() {
  const misLogros: Entrenamiento[] = [
    { ejercicio: "Barra Hombro", peso: 34, reps: 12 },
    { ejercicio: "Sentadilla", peso: 60, reps: 10 },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>🏋️‍♂️ Registro de Entrenamiento (Módulo 3)</h1>
      <p style={{ color: '#666' }}>Fecha: {obtenerFechaHoy()}</p>
      <DataTable 
        data={misLogros} 
        columns={[
          { key: 'ejercicio', label: 'Ejercicio' },
          { key: 'peso', label: 'Peso (kg)' },
          { key: 'reps', label: 'Repeticiones' }
        ]} 
      />
    </div>
  );
}

export default App;