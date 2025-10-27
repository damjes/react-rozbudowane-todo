import type { Zadanie } from "../moduły/Zadanie"

function KomponentZadania(props: {zadanie: Zadanie}) {
    return <li>{props.zadanie.treść} numer {props.zadanie.id}</li>
}

export default KomponentZadania