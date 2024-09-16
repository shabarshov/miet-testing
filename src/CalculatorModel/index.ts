import { ICalculatorModel } from "../types/calculator"
import { hasNaN } from "../../src/utils"

export class CalculatorModel implements ICalculatorModel {
    constructor() {}

    sum(a: number, b: number): number {
        if (hasNaN(a, b)) {
            throw new Error("incorrect sum params")
        }

        return a + b
    }

    subtract(a: number, b: number): number {
        if (hasNaN(a, b)) {
            throw new Error("incorrect subtract params")
        }

        return a - b
    }

    multiply(a: number, b: number): number {
        if (hasNaN(a, b)) {
            throw new Error("incorrect multiply params")
        }

        return a * b
    }

    divide(a: number, b: number): number {
        if (hasNaN(a, b)) {
            throw new Error("incorrect divide params")
        }

        if (Math.abs(b) < 1e-8) {
            throw new Error("division by near-zero is not allowed")
        }

        return a / b
    }
}
