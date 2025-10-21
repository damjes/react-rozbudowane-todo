import { dostępneStyle } from '../dostepneStyle.ts'

function zDuzej(napis: string) {
	return napis.charAt(0).toUpperCase() + napis.slice(1)
}

function WybieraczStylu(props: {
	styl: string
	zmieniarkaStylu: (f: (staryStan: string) => string) => void
	ciemny: boolean
	zmieniarkaCiemnego: (f: (czyCiemny: boolean) => boolean) => void
}) {
	console.log('Hej, tu wybieracz, oto moje propsy')
	console.log(props)

	function zmienStyl() {
		const staryIndeks = dostępneStyle.findIndex((v) => v === props.styl)
		const nowyIndeks = (staryIndeks + 1) % dostępneStyle.length
		props.zmieniarkaStylu((_) => dostępneStyle[nowyIndeks])
	}

	function wybierzStyl(e: React.ChangeEvent<HTMLSelectElement>) {
		const nowyStyl = e.target.value
		props.zmieniarkaStylu((_) => nowyStyl)
	}

	const opcje = dostępneStyle.map((styl, numer) => (
		<option value={numer} key={styl}>
			{zDuzej(styl)}
		</option>
	))

	function zmienJasnyCiemny() {
		props.zmieniarkaCiemnego((x) => !x)
	}

	return (
		<>
			<div className="container">
				<h1>Dzień dobry!</h1>
				<p>
					<button className="btn btn-primary" onClick={zmienStyl}>
						Następny styl
					</button>
				</p>
				<p>
					<select
						onChange={wybierzStyl}
						className="form-select"
						value={props.styl}
					>
						{opcje}
					</select>
				</p>
				<p>Styl to {zDuzej(props.styl)} </p>
				<p>
					<input
						type="checkbox"
						checked={props.ciemny}
						onChange={zmienJasnyCiemny}
					/>{' '}
					ciemny
				</p>
			</div>
		</>
	)
}

export default WybieraczStylu
