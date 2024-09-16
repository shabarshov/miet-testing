import { hasNaN } from "../../src/utils"

describe("hasNaN", () => {
    test("should return false for all valid numbers", () => {
        const values = [1, 2, 3, 4, 5]
        const result = hasNaN(...values)
        expect(result).toBe(false)
    })

    test("should return true for NaN in arguments", () => {
        const valuesWithNaN = [1, NaN, 3]
        const result = hasNaN(...valuesWithNaN)
        expect(result).toBe(true)
    })

    test("should return true for NaN in the first argument", () => {
        const values = [NaN, 2, 3]
        const result = hasNaN(...values)
        expect(result).toBe(true)
    })

    test("should return true for NaN in the last argument", () => {
        const values = [1, 2, NaN]
        const result = hasNaN(...values)
        expect(result).toBe(true)
    })

    test("should return true for all NaN values", () => {
        const values = [NaN, NaN, NaN]
        const result = hasNaN(...values)
        expect(result).toBe(true)
    })

    test("should return false for no arguments", () => {
        const noArguments: unknown[] = []
        const result = hasNaN(...noArguments)
        expect(result).toBe(false)
    })

    test("should return false for a single valid number argument", () => {
        const singleNumber = [42]
        const result = hasNaN(...singleNumber)
        expect(result).toBe(false)
    })
})
