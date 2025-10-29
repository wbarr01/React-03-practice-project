import { useState } from "react";

export default function UserForm({ onInputChange }) {
    const [initInvest, setInitInvest] = useState(0);
    const [annualInvest, setAnnualInvest] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    function handleChange(event) {
        switch (event.target.id) {
            case 'initInvest':
                setInitInvest(event.target.value);
                break;
            case 'annualInvest':
                setAnnualInvest(event.target.value);
                break;
            case 'expectedReturn':
                setExpectedReturn(event.target.value);
                break;
            case 'duration':
                setDuration(event.target.value);
                break;
        }
        console.log(event.target);
        onInputChange(event.target.id, event.target.value);
    }

    return (
        <div id='user-input'>
            <div className="input-group">
                <div>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" id='initInvest' value={initInvest} onChange={handleChange}></input>
                </div>
                <div>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" id='annualInvest' value={annualInvest} onChange={handleChange}></input>
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