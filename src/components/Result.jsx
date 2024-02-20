import { calculateInvestmentResults, formatter } from "../util/investment"

export default function Result() {
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
                <tr>
                    <th>1</th>
                    <th>{formatter.format(10000)}</th>
                    <th>{formatter.format(1000)}</th>
                    <th>{formatter.format(1000)}</th>
                    <th>{formatter.format(10000)}</th>
                </tr>
            </tbody>
        </table>
    )
}