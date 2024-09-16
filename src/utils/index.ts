export function hasNaN(...values: unknown[]): boolean {
    return !values.every((value) => !Number.isNaN(value))
}
