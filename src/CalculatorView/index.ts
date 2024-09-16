import * as readlineSync from "readline-sync"
import { ICalculatorView } from "../types/calculator"

export class CalculatorView implements ICalculatorView {
    printResult(result: number): void {
        console.log(`Result: ${result}`)
    }

    displayError(message: string): void {
        console.log(`Error: ${message}`)
    }

    getFirstArgumentAsString(): string {
        return readlineSync.question("Enter the first number: ")
    }

    getSecondArgumentAsString(): string {
        return readlineSync.question("Enter the second number: ")
    }
}
