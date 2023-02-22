import React, { useState } from 'react';
import { Cronomerto } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import { Lista } from '../components/Lista';
import  style  from './App.module.scss'
import { Itarefa } from '../types/tarefa';

function App() {
  
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);

  return (
    <div className={style.AppStyle} >
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas}/>
        <Cronomerto />
    </div>
  );
}

export default App;
