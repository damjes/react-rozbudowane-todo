import type { Zadanie } from "../moduły/Zadanie"
import type { Zmieniarka } from "../moduły/Zmieniarka"
import KomponentZadania from "./KomponentZadania"

function TodoLista(props: {zadania: Zadanie[], zmieniarka: Zmieniarka<Zadanie[]>}) {
    const listaZadań = props.zadania.map(zadanie => <KomponentZadania zadanie={zadanie} />)
    
    return <>
        <p>TodoLista</p>
        <ul>{listaZadań}</ul>
    </>
}

export default TodoLista