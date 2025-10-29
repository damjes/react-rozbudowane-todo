import { Activity, useState } from 'react'

import { dostępneStyle } from './moduły/dostępneStyle'
import { nowaListaZadań, type Zadanie } from './moduły/Zadanie'

import UstalStyl from './komponenty/UstalStyl'
import WybieraczStylu from './komponenty/WybieraczStylu'
import TodoLista from './komponenty/TodoLista'

import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
	const [styl, setStyl] = useState(Object.keys(dostępneStyle)[0])
	const [czyCiemny, setCzyCiemny] = useState(true)
	const [zadania, setZadania] = useState<Zadanie[]>(nowaListaZadań())

	function opakuj(ikonka: string, tekst: string) {
		const klasy = 'bi bi-' + ikonka + ' me-2'

		const opis = (
			<>
				<i className={klasy} />
				{tekst}
			</>
		)

		return {
			nazwa: tekst,
			opis,
		}
	}

	const strony = [
		{
			...opakuj('card-checklist', 'Zadania'),
			komponent: (
				<TodoLista zadania={zadania} zmieniarkaListy={setZadania} />
			),
		},
		{
			...opakuj('sliders', 'Ustawienia'),
			komponent: (
				<WybieraczStylu
					styl={styl}
					zmieniarkaStylu={setStyl}
					ciemny={czyCiemny}
					zmieniarkaCiemnego={setCzyCiemny}
				/>
			),
		},
		{
			...opakuj('info-circle', 'O aplikacji'),
			komponent: <p>O aplikacji</p>,
		},
	]

	const [strona, setStrona] = useState<string>(strony[0].nazwa)

	const taby = strony.map(bieżącaStrona => (
		<li className='nav-item' key={bieżącaStrona.nazwa}>
			<a
				className={
					'nav-link' +
					(strona === bieżącaStrona.nazwa ? ' active' : '')
				}
				href='#'
				aria-current={strona === bieżącaStrona.nazwa ? 'page' : false}
				onClick={() => setStrona(bieżącaStrona.nazwa)}
			>
				{' '}
				{bieżącaStrona.opis}
			</a>
		</li>
	))

	const karty = strony.map(bieżącaStrona => (
		<Activity mode={strona === bieżącaStrona.nazwa ? 'visible' : 'hidden'}>
			<div className='p-3'>{bieżącaStrona.komponent}</div>
		</Activity>
	))

	const doZrobienia = zadania.filter(zadanie => !zadanie.wykonane).length
	const liczbaZadań = zadania.length

	const napis =
		doZrobienia === 0 ? (
			'Wszystkie zadania zrobione'
		) : (
			<>
				Do zrobienia: {doZrobienia}/{liczbaZadań}
			</>
		)

	return (
		<>
			<UstalStyl styl={styl} ciemny={czyCiemny} />
			<nav className='navbar navbar-expand-lg text-bg-primary mb-4'>
				<div className='container-fluid'>
					<div className='navbar-brand text-reset'>
						<img
							src='android-chrome-512x512.png'
							alt='logo'
							style={{ height: '1.2em', marginRight: '0.3em' }}
						/>
						Lista ToDo
					</div>
					<div className='text-reset'>{napis}</div>
				</div>
			</nav>
			<div className='container'>
				<ul className='nav nav-tabs'>{taby}</ul>
				{karty}
			</div>
		</>
	)
}

export default App
