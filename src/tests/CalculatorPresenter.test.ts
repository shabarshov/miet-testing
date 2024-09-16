import { CalculatorModel } from "../CalculatorModel"
import { CalculatorView } from "../CalculatorView"
import { CalculatorPresenter } from "../CalculatorPresenter"

// Мокаем модули
jest.mock("../CalculatorModel")
jest.mock("../CalculatorView")

// Импортируем мокированные классы
import { CalculatorModel as MockCalculatorModel } from "../CalculatorModel"
import { CalculatorView as MockCalculatorView } from "../CalculatorView"

// Определяем типы моков
const mockCalculatorModel =
    new MockCalculatorModel() as jest.Mocked<MockCalculatorModel>
const mockCalculatorView =
    new MockCalculatorView() as jest.Mocked<MockCalculatorView>

describe("CalculatorPresenter", () => {
    let presenter: CalculatorPresenter

    beforeEach(() => {
        presenter = new CalculatorPresenter({
            calculator: mockCalculatorModel,
            view: mockCalculatorView,
        })
    })

    describe("onPlusClicked", () => {
        it("should call sum on calculator and print the result when inputs are valid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("3")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("5")
            mockCalculatorModel.sum.mockReturnValue(8)

            // Act
            presenter.onPlusClicked()

            // Assert
            expect(mockCalculatorModel.sum).toHaveBeenCalledWith(3, 5)
            expect(mockCalculatorView.printResult).toHaveBeenCalledWith(8)
        })

        it("should display error when inputs are invalid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("a")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("b")

            // Act
            presenter.onPlusClicked()

            // Assert
            expect(mockCalculatorView.displayError).toHaveBeenCalledWith(
                "Invalid input"
            )
        })
    })

    describe("onMinusClicked", () => {
        it("should call subtract on calculator and print the result when inputs are valid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("10")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("4")
            mockCalculatorModel.subtract.mockReturnValue(6)

            // Act
            presenter.onMinusClicked()

            // Assert
            expect(mockCalculatorModel.subtract).toHaveBeenCalledWith(10, 4)
            expect(mockCalculatorView.printResult).toHaveBeenCalledWith(6)
        })

        it("should display error when inputs are invalid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("x")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("y")

            // Act
            presenter.onMinusClicked()

            // Assert
            expect(mockCalculatorView.displayError).toHaveBeenCalledWith(
                "Invalid input"
            )
        })
    })

    describe("onDivideClicked", () => {
        it("should call divide on calculator and print the result when inputs are valid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("8")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("2")
            mockCalculatorModel.divide.mockReturnValue(4)

            // Act
            presenter.onDivideClicked()

            // Assert
            expect(mockCalculatorModel.divide).toHaveBeenCalledWith(8, 2)
            expect(mockCalculatorView.printResult).toHaveBeenCalledWith(4)
        })

        it("should display error when inputs are invalid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("p")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("q")

            // Act
            presenter.onDivideClicked()

            // Assert
            expect(mockCalculatorView.displayError).toHaveBeenCalledWith(
                "Invalid input"
            )
        })

        it("should display error if division by zero occurs", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("8")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("0")
            mockCalculatorModel.divide.mockImplementation(() => {
                throw new Error("Division by zero")
            })

            // Act
            presenter.onDivideClicked()

            // Assert
            expect(mockCalculatorView.displayError).toHaveBeenCalledWith(
                "Invalid input"
            )
        })
    })

    describe("onMultiplyClicked", () => {
        it("should call multiply on calculator and print the result when inputs are valid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("4")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("7")
            mockCalculatorModel.multiply.mockReturnValue(28)

            // Act
            presenter.onMultiplyClicked()

            // Assert
            expect(mockCalculatorModel.multiply).toHaveBeenCalledWith(4, 7)
            expect(mockCalculatorView.printResult).toHaveBeenCalledWith(28)
        })

        it("should display error when inputs are invalid", () => {
            // Arrange
            mockCalculatorView.getFirstArgumentAsString.mockReturnValue("a")
            mockCalculatorView.getSecondArgumentAsString.mockReturnValue("b")

            // Act
            presenter.onMultiplyClicked()

            // Assert
            expect(mockCalculatorView.displayError).toHaveBeenCalledWith(
                "Invalid input"
            )
        })
    })
})
