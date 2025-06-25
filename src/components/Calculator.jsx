import Input from './Input.jsx';
const Calculator = ({onInputChange}) => {
    return(
        <section id="user-input" >
            <div className='input-group'>
                <Input label="Initial Investment" onChange={(e)=>onInputChange('initialInvestment', e)}/>
                <Input label="Annual Investment" onChange={(e)=>onInputChange('annualInvestment', e)}/>
            </div>
            <div className='input-group'>
                <Input label="Expected Return (%)" onChange={(e)=>onInputChange('expectedReturn', e)}/>
                <Input label="Duration (Years)" onChange={(e)=>onInputChange('duration', e)}/>
            </div>
        </section>
    );
}

export default Calculator;