import { useState } from "react";

export default function UserForm({ onInputChange }) {
    const [initialInvestment, setInitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    function handleChange(event) {
        switch (event.target.id) {
            case 'initialInvestment':
                setInitialInvestment(Number(event.target.value));
                console.log(typeof event.target.value);
                break;
            case 'annualInvestment':
                setAnnualInvestment(Number(event.target.value));
                break;
            case 'expectedReturn':
                setExpectedReturn(Number(event.target.value));
                break;
            case 'duration':
                setDuration(Number(event.target.value));
                break;
        }
        onInputChange(event.target.id, Number(event.target.value));
    }

    return (
        <div id='user-input'>
            <div className="input-group">
                <div>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" id='initialInvestment' value={initialInvestment} onChange={handleChange}></input>
                </div>
                <div>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" id='annualInvestment' value={annualInvestment} onChange={handleChange}></input>
                </div>
            </div>
            <br></br>
            <div className="input-group">
                <div>
                    <label>EXPECTED RETURN</label>
                    <input type="number" id='expectedReturn' value={expectedReturn} onChange={handleChange}></input>
                </div>
                <div>
                    <label>DURATION</label>
                    <input type="number" id='duration' value={duration} onChange={handleChange}></input>
                </div>
            </div>
        </div >
    )
}