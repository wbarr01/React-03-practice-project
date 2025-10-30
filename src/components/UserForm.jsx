import { useState } from "react";

export default function UserForm({ inputData, onInputChange }) {
    /*     const [initialInvestment, setInitialInvestment] = useState(0);
        const [annualInvestment, setAnnualInvestment] = useState(0);
        const [expectedReturn, setExpectedReturn] = useState(0);
        const [duration, setDuration] = useState(0);
        
        function handleChange(event) {
    
            let value = Number(event.target.value);
            if (value < -1) {
                console.log('Negative number not allowed')
            }
            switch (event.target.id) {
                case 'initialInvestment':
                    setInitialInvestment(value);
                    break;
                case 'annualInvestment':
                    setAnnualInvestment(value);
                    break;
                case 'expectedReturn':
                    setExpectedReturn(value);
                    break;
                case 'duration':
                    setDuration(value);
                    break;
            }
            onInputChange(event.target.id, value);
        }
     */
    return (
        <div id='user-input'>
            <section className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    {/* <input type="number" required id='initialInvestment' value={initialInvestment} onChange={handleChange} ></input> */}
                    <input type="number" required id='initialInvestment' value={inputData.initialInvestment}
                        onChange={(event) => onInputChange('initialInvestment', event.target.value)} />
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    {/* <input type="number" required id='annualInvestment' value={annualInvestment} onChange={handleChange}></input> */}
                    <input type="number" required id='annualInvestment' value={inputData.annualInvestment}
                        onChange={(event) => onInputChange('annualInvestment', event.target.value)} />
                </p>
            </section>
            <section className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    {/* <input type="number" required id='expectedReturn' value={expectedReturn} onChange={handleChange}></input> */}
                    <input type="number" required id='expectedReturn' value={inputData.expectedReturn}
                        onChange={(event) => onInputChange('expectedReturn', event.target.value)} />
                </p>
                <p>
                    <label>DURATION</label>
                    {/* <input type="number" required id='duration' value={duration} onChange={handleChange}></input> */}
                    <input type="number" required id='duration' value={inputData.duration}
                        onChange={(event) => onInputChange('duration', event.target.value)} />
                </p>
            </section>
        </div >
    )
}