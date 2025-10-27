import type { Zadanie } from '../moduły/Zadanie'
import type { Zmieniarka } from '../moduły/Zmieniarka'

function KomponentZadania(props: {
	zadanie: Zadanie
	zmieniarka: Zmieniarka<Zadanie | undefined>
}) {
	return (
		<li key={props.zadanie.id}>
			{props.zadanie.treść} numer {props.zadanie.id}
			<button onClick={() => props.zmieniarka(_ => undefined)}>
				Usuń
			</button>
			<button
				onClick={() =>
					props.zmieniarka(z =>
						z ? { ...z, treść: 'abc' } : undefined
					)
				}
			>
				Ustaw treść
			</button>
		</li>
	)
}

export default KomponentZadania
