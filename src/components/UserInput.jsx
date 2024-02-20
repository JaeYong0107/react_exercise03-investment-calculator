import Result from "./Result";
import { useState } from "react";

const INITIAL_VALUE = {
    'initialInvestment': 0,
    'annualInvestment': 0,
    'expectedReturn': 0,
    'duration': 0,
}

export default function UserInput() {

    const [userInput, setUserInput] = useState(INITIAL_VALUE);

    function handleChange(e) {
        setUserInput(e.target.value);
    }

    return (<>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input type="text" required value={userInput['initialInvestment']} onChange={handleChange} />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="text" required value={userInput['annualInvestment']} onChange={handleChange} />
                </p>
            </div >
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" value={userInput['expectedReturn']} onChange={handleChange} />
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" value={userInput['duration']} onChange={handleChange} />
                </p>
            </div >
        </section >
        <section>
            <Result />
        </section>
    </>)
}