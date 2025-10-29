import 'bootstrap-icons/font/bootstrap-icons.css'

function Ikonka(props: {
	nazwa: string
	dodatkoweKlasy?: string
	opis?: string
}) {
	const klasy = 'bi bi-' + props.nazwa
	const klasyPełne = klasy + ' ' + (props.dodatkoweKlasy ?? '')

	return (
		<>
			<i className={klasyPełne} />
			{props.opis && <span className='ms-2'>{props.opis}</span>}
		</>
	)
}

export default Ikonka
