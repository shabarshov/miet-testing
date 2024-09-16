import { CalculatorModel } from "../CalculatorModel"
import {
    ICalculatorPresenter,
    ICalculatorModel,
    ICalculatorView,
} from "../types/calculator"
import { CalculatorView } from "../CalculatorView"
import { hasNaN } from "../../src/utils"

interface ICalculatorConstructor {
    calculator?: ICalculatorModel
    view?: ICalculatorView
}

export class CalculatorPresenter implements ICalculatorPresenter {
    private calculator: ICalculatorModel
    private view: ICalculatorView

    constructor(params: ICalculatorConstructor) {
        const { calculator, view } = params

        this.calculator = calculator ?? new CalculatorModel()
        this.view = view ?? new CalculatorView()
    }

    onPlusClicked(): void {
        try {
            const a: number = parseInt(this.view.getFirstArgumentAsString())
            const b: number = parseInt(this.view.getSecondArgumentAsString())

            if (hasNaN(a, b)) {
                throw new Error("Invalid input")
            }

            const result = this.calculator.sum(a, b)
            this.view.printResult(result)
        } catch (e) {
            this.view.displayError("Invalid input")
        }
    }

    onMinusClicked(): void {
        try {
            const a = parseInt(this.view.getFirstArgumentAsString())
            const b = parseInt(this.view.getSecondArgumentAsString())

            if (hasNaN(a, b)) {
                throw new Error("Invalid input")
            }

            const result = this.calculator.subtract(a, b)
            this.view.printResult(result)
        } catch (e) {
            this.view.displayError("Invalid input")
        }
    }

    onDivideClicked(): void {
        try {
            const a = parseInt(this.view.getFirstArgumentAsString())
            const b = parseInt(this.view.getSecondArgumentAsString())

            if (hasNaN(a, b)) {
                throw new Error("Invalid input")
            }

            const result = this.calculator.divide(a, b)
            this.view.printResult(result)
        } catch (e) {
            this.view.displayError("Invalid input")
        }
    }

    onMultiplyClicked(): void {
        try {
            const a = parseInt(this.view.getFirstArgumentAsString())
            const b = parseInt(this.view.getSecondArgumentAsString())

            if (hasNaN(a, b)) {
                throw new Error("Invalid input")
            }

            const result = this.calculator.multiply(a, b)
            this.view.printResult(result)
        } catch (e) {
            this.view.displayError("Invalid input")
        }
    }
}
