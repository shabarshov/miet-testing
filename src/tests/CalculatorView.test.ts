import { CalculatorView } from "../CalculatorView"
import * as readlineSync from "readline-sync"

jest.mock("readline-sync")

describe("CalculatorView", () => {
    let view: CalculatorView

    beforeEach(() => {
        view = new CalculatorView()
    })

    test("should print result correctly", () => {
        const consoleSpy = jest.spyOn(console, "log")
        view.printResult(5)
        expect(consoleSpy).toHaveBeenCalledWith("Result: 5")
    })

    test("should display error correctly", () => {
        const consoleSpy = jest.spyOn(console, "log")
        view.displayError("An error occurred")
        expect(consoleSpy).toHaveBeenCalledWith("Error: An error occurred")
    })

    test("should get first argument as string", () => {
        jest.spyOn(readlineSync, "question").mockReturnValue("10")
        const result = view.getFirstArgumentAsString()
        expect(result).toBe("10")
    })

    test("should get second argument as string", () => {
        jest.spyOn(readlineSync, "question").mockReturnValue("20")
        const result = view.getSecondArgumentAsString()
        expect(result).toBe("20")
    })
})
