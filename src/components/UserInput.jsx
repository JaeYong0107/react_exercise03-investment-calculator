export default function UserInput({ userInput, onChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input type="text" required value={userInput.initialInvestment} onChange={(event) => onChange(event, 'initialInvestment')} />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="text" required value={userInput.annualInvestment} onChange={(event) => onChange(event, 'annualInvestment')} />
                </p>
            </div >
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" value={userInput.expectedReturn} onChange={(event) => onChange(event, 'expectedReturn')} />
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" value={userInput.duration} onChange={(event) => onChange(event, 'duration')} />
                </p>
            </div >
        </section >
    )
}