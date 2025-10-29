import { useId } from 'react'
import { dostępneStyle } from '../moduły/dostępneStyle.ts'

function zDuzej(napis: string) {
	return napis.charAt(0).toUpperCase() + napis.slice(1)
}

function WybieraczStylu(props: {
	styl: string
	zmieniarkaStylu: (f: (staryStan: string) => string) => void
	ciemny: boolean
	zmieniarkaCiemnego: (f: (czyCiemny: boolean) => boolean) => void
}) {
	const ciemnyId = useId()

	const nazwyStylów = Object.keys(dostępneStyle)

	function zmienStyl() {
		const staryIndeks = nazwyStylów.findIndex(v => v === props.styl)
		const nowyIndeks = (staryIndeks + 1) % nazwyStylów.length
		props.zmieniarkaStylu(_ => nazwyStylów[nowyIndeks])
	}

	function wybierzStyl(e: React.ChangeEvent<HTMLSelectElement>) {
		const nowyStyl = e.target.value
		props.zmieniarkaStylu(_ => nowyStyl)
	}

	const opcje = nazwyStylów.map(styl => (
		<option value={styl} key={styl}>
			{zDuzej(styl)}
		</option>
	))

	function zmienJasnyCiemny() {
		props.zmieniarkaCiemnego(x => !x)
	}

	return (
		<>
			<div className='container'>
				<h1>Dzień dobry!</h1>
				<p>
					<button className='btn btn-primary' onClick={zmienStyl}>
						Następny styl
					</button>
				</p>
				<p>
					<select
						onChange={wybierzStyl}
						className='form-select'
						value={props.styl}
					>
						{opcje}
					</select>
				</p>
				<p>Styl to {zDuzej(props.styl)} </p>
				<p>
					<input
						type='checkbox'
						checked={props.ciemny}
						onChange={zmienJasnyCiemny}
						id={ciemnyId}
					/>
					<label htmlFor={ciemnyId}>&nbsp;ciemny</label>
				</p>
			</div>
		</>
	)
}

export default WybieraczStylu
