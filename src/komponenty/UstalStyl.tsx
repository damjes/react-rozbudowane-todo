import 'bootstrap/dist/js/bootstrap.js'
import { useEffect } from 'react'
import { dostępneStyle } from '../moduły/dostępneStyle'

function UstalStyl(props: { ciemny: boolean; styl: string }) {
	const urlStylu = dostępneStyle[props.styl]

	const jasnyCiemny = props.ciemny ? 'dark' : 'light'

	useEffect(() => {
		document.documentElement.setAttribute('data-bs-theme', jasnyCiemny)
	}, [props.ciemny])

	return <link rel='stylesheet' href={urlStylu} />
}

export default UstalStyl
