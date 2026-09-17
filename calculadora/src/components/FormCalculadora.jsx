import { useState } from 'react'
import styles from './FormCalculadora.module.css'

function FormCalculadora() {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operacao, setOperacao] = useState('')
    const [resultado, setResultado] = useState('')

    function calcular(e) {
        e.preventDefault()

        const n1 = Number(num1)
        const n2 = Number(num2)

        let res

        switch (operacao) {
            case '+':
                res = n1 + n2
                break
            case '-':
                res = n1 - n2
                break
            case '*':
                res = n1 * n2
                break
            case '/':
                if (n2 === 0) {
                    setResultado('Não é possível dividir por zero')
                    return
                }
                res = n1 / n2
                break
            default:
                setResultado('Selecione uma operação')
                return
        }

        setResultado(res)
    }

    function limpar() {
        setNum1('')
        setNum2('')
        setOperacao('')
        setResultado('')
    }

    return (
        <div>
            <form onSubmit={calcular}>
                <h2>Calculadora</h2>

                <div>
                    <input
                        type="number"
                        placeholder="Informe o primeiro número"
                        name="num1"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="number"
                        placeholder="Informe o segundo número"
                        name="num2"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />
                </div>

                <div>
                    <select
                        value={operacao}
                        onChange={(e) => setOperacao(e.target.value)}
                    >
                        <option value="">Selecione a operação</option>
                        <option value="+">Somar (+)</option>
                        <option value="-">Subtrair (-)</option>
                        <option value="*">Multiplicar (*)</option>
                        <option value="/">Dividir (/)</option>
                    </select>
                </div>

                <div className={styles.btn}>
                    <input type="submit" value="Calcular" />
                    <input type="button" value="Limpar" onClick={limpar} />
                </div>

                {resultado !== '' && (
                    <h3>Resultado: {resultado}</h3>
                )}
            </form>
        </div>
    )
}

export default FormCalculadora