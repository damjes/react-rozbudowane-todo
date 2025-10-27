export type MutatorStanu<Stan> = (przed: Stan) => Stan
export type Zmieniarka<Stan> = (mutator: MutatorStanu<Stan>) => void

export function generatorZmieniarek<T extends { id: string }>(
	zmieniarkaListy: Zmieniarka<T[]>
) {
	return (staryElement: T) => (mutator: MutatorStanu<T | undefined>) => {
		const nowyElement = mutator(staryElement)

		if (nowyElement) {
			zmieniarkaListy(lista =>
				lista.map(element =>
					staryElement.id === element.id ? nowyElement : element
				)
			)
		} else {
			zmieniarkaListy(lista =>
				lista.filter(element => element.id !== staryElement.id)
			)
		}
	}
}
