export type MutatorStanu<Stan> = (przed: Stan) => Stan
export type Zmieniarka<Stan> = (mutator: MutatorStanu<Stan>) => void