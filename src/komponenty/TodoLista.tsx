import type { Zadanie } from '../moduły/Zadanie'
import { generatorZmieniarek, type Zmieniarka } from '../moduły/Zmieniarka'
import KomponentZadania from './KomponentZadania'

function TodoLista(props: {
	zadania: Zadanie[]
	zmieniarkaListy: Zmieniarka<Zadanie[]>
}) {
	const zmieniarkaPojedynczegoZadania = generatorZmieniarek(
		props.zmieniarkaListy
	)

	const listaZadań = props.zadania.map(zadanie => (
		<KomponentZadania
			zadanie={zadanie}
			zmieniarka={zmieniarkaPojedynczegoZadania(zadanie)}
		/>
	))

	return (
		<>
			<p>TodoLista</p>
			<ul>{listaZadań}</ul>
		</>
	)
}

export default TodoLista
