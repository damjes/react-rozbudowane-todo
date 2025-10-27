export enum Priorytet {
    niski,
    średni,
    wysoki,
}

export type Zadanie = {
    id: string
    treść: string,
    priorytet: Priorytet,
    wykonane: boolean,
}

export function noweZadanie(treść?: string, priorytet?: Priorytet, wykonane?: boolean): Zadanie {
    return {
        id: 'a',
        treść: treść ?? 'Nowe zadanie',
        priorytet: priorytet ?? Priorytet.niski,
        wykonane: wykonane ?? false,
    }
}

export function nowaListaZadań() {
    return [
        noweZadanie(),
        noweZadanie(),
        noweZadanie(),
    ]
}