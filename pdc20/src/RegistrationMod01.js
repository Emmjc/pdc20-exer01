import React, {useState} from 'react';

import './App.css';

function Registration(){
    const[fullname, setFullname] = useState ('');
    const[email, setEmail] = useState ('');
    const[birth, setBirth] = useState ('');
    const[age, setAge] = useState ('');
    const[gender, setGender] = useState ('');
    const[phonenumber, setPhonenumber] = useState ('');
    const[address, setAddress] = useState ('');
    const[interest, setInterest] = useState ('');
    const[term, setTerm] = useState ('');
    const[emergencycontactname, setEmergencycontactname] = useState ('');
    const[emergencycontact, setEmergencycontact] = useState ('');
    const[addcomments, setAddcomments] = useState ('');
    const[submitted, setSubmitted] = useState (false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submmited: ", {
            fullname,
            email,
            birth,
            age,
            gender,
            phonenumber,
            address,
            interest,
            term,
            emergencycontactname,
            emergencycontact,
            addcomments,
            submitted})
        setSubmitted (true);
    };

    return(
        <div className = "Registration">
            <header className = "App-header">
                <h1>Registration Form</h1>
                <form onSubmit={handleSubmit} className = "registration-form">
                    <div>
                        <label htmlFor="fullname">Full Name: </label>
                        <input className='form-control' type="text" id="username" value={fullname} onChange={(e) => setFullname(e.target.value)} required/>
                    </div>
                    
                    <div>
                        <label htmlFor="email">Email Address: </label>
                        <input className='form-control' type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    
                    <div>
                        <label htmlFor="birth">Date of Birth: </label>
                        <input className='form-control' type="date" id="birth" value={birth} onChange={(e) => setBirth(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="age">Age: </label>
                        <input className='form-control' type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required/>
                    </div>

                    <div>
                        <label htmlFor="gender">Gender: </label>
                        <select
                            className='form-control'
                            id="gender"
                            value={gender} 
                            onChange={(e) => setGender(e.target.value)} 
                            required
                        >   
                            <option value="" disabled>Select your gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="phonenumber">Phone Number: </label>
                            <input
                                className='form-control'
                                type="tel"
                                id="phonenumber"
                                name="phonenumber"
                                value={phonenumber}
                                onChange={(e) => setPhonenumber(e.target.value)} 
                                required
                            />
                    </div>

                    <div>
                        <label htmlFor="address">Address: </label>
                            <input
                                className='form-control'
                                type="text"
                                id="address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)} 
                                required
                            />
                    </div>

                    <div>
                        <label htmlFor="interest">Course of Interest </label>
                        <select
                            className='form-control'
                            id="interest"
                            value={interest} 
                            onChange={(e) => setInterest(e.target.value)} 
                            required
                        >   
                            <option value="" disabled>Select your College Course</option>
                            <option value="CCS">CCS</option>
                            <option value="CAS">CAS</option>
                            <option value="CAMP">CAMP</option>
                            <option value="CEA">CEA</option>
                            <option value="CON">CON</option>
                            <option value="SOM">SOM</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="term">Preferred Enrollment Term: </label>
                        <select
                            className='form-control'
                            id="term"
                            value={term} 
                            onChange={(e) => setTerm(e.target.value)} 
                            required
                        >   
                            <option value="" disabled>Select your preferred term</option>
                            <option value="1stSem">1st Semester</option>
                            <option value="2ndSem">2nd Semester</option>
                            <option value="3rdSem">3rd Semester</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="emergencycontactname">Emergency Contact Name: </label>
                            <input
                                className='form-control'
                                type="text"
                                id="emergencycontactname"
                                name="emergencycontactname"
                                value={emergencycontactname}
                                onChange={(e) => setEmergencycontactname(e.target.value)} 
                                required
                            />
                    </div>

                    <div>
                        <label htmlFor="emergencycontact">Emergency Contact Phone Number: </label>
                            <input
                                className='form-control'
                                type="number"
                                id="emergencycontact"
                                name="emergencycontact"
                                value={emergencycontact}
                                onChange={(e) => setEmergencycontact(e.target.value)}
                                required
                            />
                    </div>

                    <div>
                        <label htmlFor="addcomments">Additional Comments: </label>
                            <textarea
                                className='form-control'
                                id="addcomments"
                                name="addcomments"
                                value={addcomments}
                                onChange={(e) => setAddcomments(e.target.value)}
                            />
                    </div>



                
                    <button className='btn btn-success btn-md' type="submit">Register</button>
                    <button className='btn btn-danger btn-md' type="reset"> Reset</button>
                    {submitted && (<p className="success-manage">Registration Successful!</p>)}
                </form>



            </header>
        </div>
    );
}
export default Registration;