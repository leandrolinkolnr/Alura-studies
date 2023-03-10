import React, { useState } from 'react';
import { Cronomerto } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import { Lista } from '../components/Lista';
import  style  from './App.module.scss'
import { Itarefa } from '../types/tarefa';

function App() {
  
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas( tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
  } )) )
  }

  return (
    <div className={style.AppStyle} >
        <Formulario setTarefas={setTarefas} />
        <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
        />
        <Cronomerto />
    </div>
  );
}

export default App;
