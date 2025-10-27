import 'bootstrap/dist/js/bootstrap.js'
import { useEffect } from 'react'

function UstalStyl(props: { ciemny: boolean; styl: string }) {
	const urlStylu =
		props.styl === 'bootstrap'
			? '/node_modules/bootstrap/dist/css/bootstrap.css'
			: `/node_modules/bootswatch/dist/${props.styl}/bootstrap.css`

	const jasnyCiemny = props.ciemny ? 'dark' : 'light'

	useEffect(() => {
		document.documentElement.setAttribute('data-bs-theme', jasnyCiemny)
	}, [props.ciemny])

	return <link rel='stylesheet' href={urlStylu} />
}

export default UstalStyl
