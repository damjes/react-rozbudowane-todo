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
			key={zadanie.id}
			zadanie={zadanie}
			zmieniarka={zmieniarkaPojedynczegoZadania(zadanie)}
		/>
	))

	return (
		<>
			<p>Lista rzeczy do zrobienia</p>
			<ul className='list-group'>{listaZadań}</ul>
		</>
	)
}

export default TodoLista
