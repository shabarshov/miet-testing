import { CalculatorModel } from "../CalculatorModel"
import { hasNaN } from "../../src/utils"

jest.mock("../../src/utils", () => ({
    hasNaN: jest.fn(),
}))

describe("CalculatorModel", () => {
    let calculator: CalculatorModel
    const mockHasNaN = hasNaN as jest.MockedFunction<typeof hasNaN>

    beforeEach(() => {
        calculator = new CalculatorModel()
    })

    describe("sum", () => {
        test("should return correct result for positive numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.sum(1, 2)).toBe(3)
        })

        test("should return correct result for negative numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.sum(-1, -2)).toBe(-3)
        })

        test("should return correct result for zeros", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.sum(0, 0)).toBe(0)
        })

        test("should throw error for NaN in the first argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.sum(NaN, 1)).toThrow("incorrect sum params")
        })

        test("should throw error for NaN in the second argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.sum(1, NaN)).toThrow("incorrect sum params")
        })

        test("should throw error for NaN in both arguments", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.sum(NaN, NaN)).toThrow(
                "incorrect sum params"
            )
        })

        test("should handle MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.sum(Number.MAX_VALUE, 1)).toBe(Number.MAX_VALUE)
        })

        test("should handle -MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.sum(-Number.MAX_VALUE, -1)).toBe(
                -Number.MAX_VALUE
            )
        })
    })

    describe("subtract", () => {
        test("should return correct result for positive numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.subtract(3, 2)).toBe(1)
        })

        test("should return correct result for negative numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.subtract(-1, -2)).toBe(1)
        })

        test("should return correct result for zeros", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.subtract(0, 0)).toBe(0)
        })

        test("should throw error for NaN in the first argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.subtract(NaN, 1)).toThrow(
                "incorrect subtract params"
            )
        })

        test("should throw error for NaN in the second argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.subtract(1, NaN)).toThrow(
                "incorrect subtract params"
            )
        })

        test("should throw error for NaN in both arguments", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.subtract(NaN, NaN)).toThrow(
                "incorrect subtract params"
            )
        })

        test("should handle MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.subtract(Number.MAX_VALUE, 1)).toBe(
                Number.MAX_VALUE - 1
            )
        })

        test("should handle -MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.subtract(-Number.MAX_VALUE, 1)).toBe(
                -Number.MAX_VALUE - 1
            )
        })
    })

    describe("multiply", () => {
        test("should return correct result for positive numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(3, 2)).toBe(6)
        })

        test("should return correct result for negative numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(-3, -2)).toBe(6)
        })

        test("should return correct result for mixed sign numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(-3, 2)).toBe(-6)
        })

        test("should return correct result for zero and a number", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(1, 0)).toBe(0)
        })

        test("should return correct result for two zeros", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(0, 0)).toBe(0)
        })

        test("should handle MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(Number.MAX_VALUE, 1)).toBe(
                Number.MAX_VALUE
            )
        })

        test("should handle -MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.multiply(-Number.MAX_VALUE, 1)).toBe(
                -Number.MAX_VALUE
            )
        })

        test("should throw error for NaN in the first argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.multiply(NaN, 1)).toThrow(
                "incorrect multiply params"
            )
        })

        test("should throw error for NaN in the second argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.multiply(1, NaN)).toThrow(
                "incorrect multiply params"
            )
        })

        test("should throw error for NaN in both arguments", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.multiply(NaN, NaN)).toThrow(
                "incorrect multiply params"
            )
        })
    })

    describe("divide", () => {
        test("should return correct result for positive numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.divide(6, 2)).toBe(3)
        })

        test("should return correct result for negative numbers", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.divide(-6, -2)).toBe(3)
        })

        test("should throw error for NaN in the first argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.divide(NaN, 1)).toThrow(
                "incorrect divide params"
            )
        })

        test("should throw error for NaN in the second argument", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.divide(1, NaN)).toThrow(
                "incorrect divide params"
            )
        })

        test("should throw error for NaN in both arguments", () => {
            mockHasNaN.mockReturnValue(true)
            expect(() => calculator.divide(NaN, NaN)).toThrow(
                "incorrect divide params"
            )
        })

        test("should throw error when dividing by a number close to zero", () => {
            mockHasNaN.mockReturnValue(false)
            expect(() => calculator.divide(6, 1e-9)).toThrow(
                "division by near-zero is not allowed"
            )
        })

        test("should throw error when dividing by zero", () => {
            mockHasNaN.mockReturnValue(false)
            expect(() => calculator.divide(6, 0)).toThrow(
                "division by near-zero is not allowed"
            )
        })

        test("should handle MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.divide(Number.MAX_VALUE, 1)).toBe(
                Number.MAX_VALUE
            )
        })

        test("should handle -MAX_VALUE", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.divide(-Number.MAX_VALUE, 1)).toBe(
                -Number.MAX_VALUE
            )
        })

        test("should handle dividing MAX_VALUE by itself", () => {
            mockHasNaN.mockReturnValue(false)
            expect(calculator.divide(Number.MAX_VALUE, Number.MAX_VALUE)).toBe(
                1
            )
        })
    })
})
