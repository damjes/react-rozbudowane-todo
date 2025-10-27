import { useState } from 'react'

import { dostępneStyle } from './moduły/dostępneStyle'

import UstalStyl from './komponenty/UstalStyl'
import WybieraczStylu from './komponenty/WybieraczStylu'
import TodoLista from './komponenty/TodoLista'
import type { Zadanie } from './moduły/Zadanie'

function App() {
	const [styl, setStyl] = useState(dostępneStyle[0])
	const [czyCiemny, setCzyCiemny] = useState(true)
	const [zadania, setZadania] = useState<Zadanie[]>([])

	const strony = [
		{ nazwa: 'Zadania', komponent: <TodoLista zadania={zadania} zmieniarka={setZadania} /> },
		{
			nazwa: 'Ustawienia',
			komponent: (
				<WybieraczStylu
					styl={styl}
					zmieniarkaStylu={setStyl}
					ciemny={czyCiemny}
					zmieniarkaCiemnego={setCzyCiemny}
				/>
			),
		},
		{ nazwa: 'O aplikacji', komponent: <p>O aplikacji</p> },
	]

	const [strona, setStrona] = useState<string>(strony[0].nazwa)

	const taby = strony.map((bieżącaStrona) => (
		<li className="nav-item">
			{strona === bieżącaStrona.nazwa ? (
				<a
					className="nav-link active"
					href="#"
					aria-current="page"
					onClick={() => setStrona(bieżącaStrona.nazwa)}
				>
					{' '}
					{bieżącaStrona.nazwa}
				</a>
			) : (
				<a
					className="nav-link"
					href="#"
					onClick={() => setStrona(bieżącaStrona.nazwa)}
				>
					{' '}
					{bieżącaStrona.nazwa}
				</a>
			)}
		</li>
	))

	const komponentStrony = strony.filter((s) => s.nazwa === strona)[0]
		.komponent

	return (
		<>
			<UstalStyl styl={styl} ciemny={czyCiemny} />
			<nav className="navbar navbar-expand-lg text-bg-primary mb-4">
				<div className="container-fluid">
					<div className="navbar-brand text-reset">
						Lista ToDo
					</div>
					<div className="text-reset">
						Zadania: 2/5
					</div>
				</div>
			</nav>
			<div className="container">
				<ul className="nav nav-tabs">{taby}</ul>
				<div className="p-3">{komponentStrony}</div>
			</div>
		</>
	)
}

export default App
