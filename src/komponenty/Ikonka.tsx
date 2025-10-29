import 'bootstrap-icons/font/bootstrap-icons.css'

function Ikonka(props: { nazwa: string; dodatkoweKlasy?: string }) {
	const klasy = 'bi bi-' + props.nazwa
	const klasyPełne = klasy + ' ' + (props.dodatkoweKlasy ?? '')

	return <i className={klasyPełne} />
}

export default Ikonka
