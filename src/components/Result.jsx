import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result({ inputs }) {

    const results = [];
    let [totalInterest, investedCapital] = [0, inputs.initialInvestment];
    for (const result of calculateInvestmentResults(inputs)) {
        totalInterest += result['interest'];
        investedCapital += result['annualInvestment'];
        results.push(
            <tr key={result['year']}>
                <td>{result['year']}</td>
                <td>{formatter.format(result['valueEndOfYear'])}</td>
                <td>{formatter.format(result['interest'])}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
            </tr>
        );
    }

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results}
            </tbody>
        </table>
    )
}