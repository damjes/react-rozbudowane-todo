import type { Zadanie } from "../moduły/Zadanie"

function KomponentZadania(props: {zadanie: Zadanie}) {
    return <li>{props.zadanie.treść}</li>
}

export default KomponentZadania