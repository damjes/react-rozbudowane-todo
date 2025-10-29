import { useId } from 'react'

import type { Zadanie } from '../moduły/Zadanie'
import type { Zmieniarka } from '../moduły/Zmieniarka'

import Ikonka from './Ikonka'

function KomponentZadania(props: {
	zadanie: Zadanie
	zmieniarka: Zmieniarka<Zadanie | undefined>
}) {
	const idCzekboksa = useId()

	const zadanie = props.zadanie

	function wykonaj() {
		props.zmieniarka(z => (z ? { ...z, wykonane: !z.wykonane } : undefined))
	}

	function edytujNazwę() {}

	const klasaOpisu = zadanie.wykonane ? 'text-decoration-line-through' : ''

	return (
		<li className='list-group-item justify-content-between d-flex align-items-center'>
			<div>
				<input
					type='checkbox'
					id={idCzekboksa}
					className='me-1'
					checked={zadanie.wykonane}
					onChange={wykonaj}
				/>
				<label htmlFor={idCzekboksa} className={klasaOpisu}>
					{zadanie.treść} numer {zadanie.id}
				</label>
			</div>
			<div>
				<button
					className='btn btn-primary btn-sm'
					onClick={edytujNazwę}
				>
					<Ikonka nazwa='feather' opis='Zmień' />
				</button>
				<button
					className='btn btn-danger btn-sm ms-2'
					onClick={() => props.zmieniarka(_ => undefined)}
				>
					<Ikonka nazwa='trash' opis='Usuń' />
				</button>
			</div>
		</li>
	)
}

export default KomponentZadania
