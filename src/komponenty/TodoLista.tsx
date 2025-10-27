import type { Zadanie } from '../moduły/Zadanie'
import type { MutatorStanu, Zmieniarka } from '../moduły/Zmieniarka'
import KomponentZadania from './KomponentZadania'

function TodoLista(props: {
	zadania: Zadanie[]
	zmieniarka: Zmieniarka<Zadanie[]>
}) {
	function zmieniarkaPojedynczegoZadania(stareZadanie: Zadanie) {
		return (mutator: MutatorStanu<Zadanie | undefined>) => {
			const noweZadanie = mutator(stareZadanie)

			if (noweZadanie) {
				props.zmieniarka(lista =>
					lista.map(zadanie =>
						stareZadanie.id === zadanie.id ? noweZadanie : zadanie
					)
				)
			} else {
				props.zmieniarka(lista =>
					lista.filter(zadanie => zadanie.id !== stareZadanie.id)
				)
			}
		}
	}
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
