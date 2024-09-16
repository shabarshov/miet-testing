import { CalculatorModel } from "./CalculatorModel"
import { CalculatorPresenter } from "./CalculatorPresenter"
import { CalculatorView } from "./CalculatorView"

const calculator = new CalculatorModel()
const view = new CalculatorView()
const presenter = new CalculatorPresenter({
    calculator,
    view,
})

presenter.onPlusClicked()
