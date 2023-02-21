import React, { useState } from "react";
import { Item } from "./Item";
import style from './Lista.module.scss'

export function Lista(){

    const [tarefas, setTarefas] = useState([{
      tarefa: 'React',
      tempo: '02:00:00'
    }, {
      tarefa: 'Javascript',
      tempo: '01:00:00'
    }]);


    return(
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
              setTarefas([...tarefas, {tarefa: "Estudar estado", tempo: "05:00:00"}]);    {/* Essa expressao quer dizer que tarefas é igual a ele mesmo, mais o arqumento da direita*/}
            }}     >Estudos do dia</h2>
            <ul> 
                {tarefas.map((item, index) => (
                  <Item  key={index}
                  {...item}   />
                ))} 

                {/*
                {tarefas.map((item, index) => (
                  <Item key={index}
                  tarefa={item.tarefa}
                  tempo={item.tempo} />
                ))} */}

            </ul>

            
        </aside>
    )
}