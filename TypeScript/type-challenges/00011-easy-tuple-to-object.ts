const tuple = ['xiaomi4', 'xiaomi10', 'hongmi Note', 'xiaomi18'] as const

type TupleToObject<T extends readonly string[]> = {
    [v in T[number]]: v
}

type result = TupleToObject<typeof tuple>
