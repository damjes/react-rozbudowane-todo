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