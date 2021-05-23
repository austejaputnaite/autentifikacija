import React, {useState} from 'react';

function LoginForm({SecondStep, error}) {

    const [details, setDetails] = useState({email: "", active: "false"});
    
    const submitHandler = e => {
        e.preventDefault();
        details.active = "false";
        SecondStep(details);
    };

    return (
        <div className="small-form">
            <h1>Saugi internetinė svetainė</h1>
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Prisijunkite</h2>
                    <div className="form-group">
                        <label htmlFor="email">El. paštas</label>
                        <input type="email" name="email" id="email" placeholder = "pateikite el. pašto adresą" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div className="error">{error}</div>
                    <button type="submit">Tęsti</button>
                </div>
            </form> 
        </div>
    )
}
export default LoginForm;