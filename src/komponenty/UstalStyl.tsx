import 'bootstrap/dist/js/bootstrap.js'

function UstalStyl(props: { ciemny: boolean; styl: string }) {
	const urlStylu =
		props.styl === 'bootstrap'
			? '/node_modules/bootstrap/dist/css/bootstrap.css'
			: `/node_modules/bootswatch/dist/${props.styl}/bootstrap.css`

	const jasnyCiemny = props.ciemny ? 'dark' : 'light'

	return (
		<>
			<html data-bs-theme={jasnyCiemny} />
			<link rel='stylesheet' href={urlStylu} />
		</>
	)
}

export default UstalStyl
