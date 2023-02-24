
import { Itarefa } from "../../types/tarefa";
import { Item } from "./Item";
import style from './Lista.module.scss'



interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

export function Lista({ tarefas, selecionaTarefa }: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul> 
                {tarefas.map((item) => (
                  <Item  
                  selecionaTarefa={selecionaTarefa}
                  key={item.id}
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