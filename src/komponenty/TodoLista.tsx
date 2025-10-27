import type { Zadanie } from "../moduły/Zadanie"
import type { Zmieniarka } from "../moduły/Zmieniarka"
import KomponentZadania from "./KomponentZadania"

function TodoLista(props: {zadania: Zadanie[], zmieniarka: Zmieniarka<Zadanie[]>}) {
    return <>
        <p>TodoLista</p>
        <ul>
            <KomponentZadania />
            <KomponentZadania />
            <KomponentZadania />
        </ul>
    </>
}

export default TodoLista