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
			<h2 className='my-4'>Lista rzeczy do zrobienia</h2>
			<ul className='list-group'>{listaZadań}</ul>
		</>
	)
}

export default TodoLista
