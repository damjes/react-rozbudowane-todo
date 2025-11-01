import { useId, useState } from 'react'

import { ikonkiPriorytetów } from '../moduły/Priorytet'
import type { Zadanie } from '../moduły/Zadanie'
import type { Zmieniarka } from '../moduły/Zmieniarka'

import Ikonka from './Ikonka'

function KomponentZadania(props: {
	zadanie: Zadanie
	zmieniarka: Zmieniarka<Zadanie | undefined>
}) {
	const idCzekboksa = useId()

	const [edycja, setEdycja] = useState<string | null>(null)
	const [czyUsuwamy, setCzyUsuwamy] = useState(false)

	const zadanie = props.zadanie

	function wykonaj() {
		props.zmieniarka(z => (z ? { ...z, wykonane: !z.wykonane } : undefined))
	}

	const klasaOpisu = zadanie.wykonane ? 'text-decoration-line-through' : ''

	function zatwierdźEdycję() {
		if (edycja !== null && edycja.trim() !== '') {
			props.zmieniarka(z =>
				z ? { ...z, treść: edycja.trim() } : undefined
			)
		} else {
			return
		}
		setEdycja(null)
	}

	const edycjaZadania = (
		<input
			type='text'
			className='d-inline-block me-2'
			value={edycja ?? ''}
			onChange={e => setEdycja(e.target.value)}
			onKeyDown={e => {
				if (e.key === 'Enter') {
					zatwierdźEdycję()
				}
			}}
			autoFocus
		/>
	)

	const tekstZadania = (
		<label htmlFor={idCzekboksa} className={klasaOpisu}>
			<Ikonka
				nazwa={ikonkiPriorytetów[zadanie.priorytet]}
				dodatkoweKlasy='me-1'
			/>
			{zadanie.treść}
		</label>
	)

	const przyciskEdycji = (
		<button
			className='btn btn-primary btn-sm me-md-2 me-0'
			onClick={() => setEdycja(zadanie.treść)}
		>
			<Ikonka nazwa='feather' opis='Zmień' />
		</button>
	)

	const przyciskZatwierdzeniaEdycji = (
		<button
			className='btn btn-success btn-sm me-md-2 me-0'
			onClick={zatwierdźEdycję}
		>
			<Ikonka nazwa='floppy' opis='Zapisz' />
		</button>
	)

	const przyciskZatwierdzeniaUsuwania = (
		<button
			className='btn btn-warning btn-sm me-md-2 me-0'
			onClick={() => props.zmieniarka(_ => undefined)}
		>
			<Ikonka nazwa='trash' opis='Na pewno usuń' />
		</button>
	)

	const przyciskUsuwania = (
		<button
			className='btn btn-danger btn-sm me-md-2 me-0'
			onClick={() => setCzyUsuwamy(true)}
		>
			<Ikonka nazwa='trash' opis='Usuń' />
		</button>
	)

	const przyciskAnulowania = (
		<button
			className='btn btn-secondary btn-sm'
			onClick={() => {
				;(setEdycja(null), setCzyUsuwamy(false))
			}}
		>
			<Ikonka nazwa='x-circle' opis='Anuluj' />
		</button>
	)

	return (
		<li className='list-group-item justify-content-between d-flex align-items-center'>
			<div>
				<input
					type='checkbox'
					id={idCzekboksa}
					className='me-2'
					checked={zadanie.wykonane}
					onChange={wykonaj}
				/>
				{edycja ? edycjaZadania : tekstZadania}
			</div>
			<div className='d-grid d-md-block gap-2'>
				{edycja
					? przyciskZatwierdzeniaEdycji
					: czyUsuwamy
						? przyciskZatwierdzeniaUsuwania
						: przyciskEdycji}
				{czyUsuwamy || edycja ? przyciskAnulowania : przyciskUsuwania}
			</div>
		</li>
	)
}

export default KomponentZadania
