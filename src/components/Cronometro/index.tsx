import Botao from "../Botao";
import { Relogio } from "./Relogio";
import style from './Cronometro.module.scss'

export function Cronomerto(){
    return(
        <div className={style.cronometro}>
            <p className={style.titulo} >Escolha um card e inicie o cronometro</p>
            <div className={style.relogioWrapper} >
                <Relogio />
            </div>
            <Botao texto="Começar" />
        </div>
    )
}