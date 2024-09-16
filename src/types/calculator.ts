export type CalcFunctionType = (a: number, b: number) => number
export type EmptyFunctionType = () => void

export interface ICalculatorModel {
    /**
     * Вычисляет сумму двух чисел
     */
    sum: CalcFunctionType

    /**
     * Вычисляет разность двух чисел a - b
     */
    subtract: CalcFunctionType

    /**
     * Вычисляет произведение двух чисел
     */
    multiply: CalcFunctionType

    /**
     * Вычисляет отношение числа а к числу b.
     * Должен выбросить {@link java.lang.ArithmeticException} если |b| < 10e-8
     */
    divide: CalcFunctionType
}

export interface ICalculatorPresenter {
    /**
     * Вызывается формой в тот момент, когда пользователь нажал на кнопку '+'
     */
    onPlusClicked: EmptyFunctionType

    /**
     * Вызывается формой в тот момент, когда пользователь нажал на кнопку '-'
     */
    onMinusClicked: EmptyFunctionType

    /**
     * Вызывается формой в тот момент, когда пользователь нажал на кнопку '/'
     */
    onDivideClicked: EmptyFunctionType

    /**
     * Вызывается формой в тот момент, когда пользователь нажал на кнопку '*'
     */
    onMultiplyClicked: EmptyFunctionType
}

export interface ICalculatorView {
    /**
     * Отображает результат вычисления
     */
    printResult: (result: number) => void

    /**
     * Показывает ошибку, например деление на 0, пустые аргументы и прочее
     */
    displayError: (message: string) => void

    /**
     * Возвращает значение, введенное в поле первого аргументы
     */
    getFirstArgumentAsString: () => string

    /**
     * Возвращает значение, введенное в поле второго аргументы
     */
    getSecondArgumentAsString: () => string
}
