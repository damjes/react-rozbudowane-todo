import { Priorytet } from './Priorytet'

export type Zadanie = {
	id: string
	treść: string
	priorytet: Priorytet
	wykonane: boolean
}

export function noweZadanie(
	treść?: string,
	priorytet?: Priorytet,
	wykonane?: boolean
): Zadanie {
	return {
		id: self.crypto.randomUUID(),
		treść: treść ?? 'Nowe zadanie',
		priorytet: priorytet ?? Priorytet.niski,
		wykonane: wykonane ?? false,
	}
}

export function nowaListaZadań() {
	return [
		noweZadanie('niski', Priorytet.niski),
		noweZadanie('średni', Priorytet.średni),
		noweZadanie('wysoki', Priorytet.wysoki),
	]
}
