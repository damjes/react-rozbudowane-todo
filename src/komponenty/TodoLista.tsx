import { useState } from 'react'

import { noweZadanie, type Zadanie } from '../moduły/Zadanie'
import { generatorZmieniarek, type Zmieniarka } from '../moduły/Zmieniarka'

import KomponentZadania from './KomponentZadania'
import Ikonka from './Ikonka'

function TodoLista(props: {
	zadania: Zadanie[]
	zmieniarkaListy: Zmieniarka<Zadanie[]>
}) {
	const [noweZadanieTreść, setNoweZadanieTreść] = useState('')

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
			<h3 className='my-4'>Dodawanie zadania</h3>
			<div className='input-group mb-3'>
				<input
					type='text'
					className='form-control'
					placeholder='Treść nowego zadania'
					value={noweZadanieTreść}
					onChange={e => setNoweZadanieTreść(e.target.value)}
					required
				/>
				<button
					className='btn btn-success'
					type='button'
					onClick={() => {
						props.zmieniarkaListy(zadania => [
							...zadania,
							noweZadanie(noweZadanieTreść),
						])
						setNoweZadanieTreść('')
					}}
					disabled={!(noweZadanieTreść.trim().length > 0)}
				>
					<Ikonka nazwa='plus-lg' opis='Dodaj' />
				</button>
			</div>
		</>
	)
}

export default TodoLista
