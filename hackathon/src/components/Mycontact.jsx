import React, { useState } from 'react'
import './Mycontact.css'
import Student from './Student'

function Mycontact() {
    const [formInput, setFormInput] = useState({
        studentEmail: "",
        studentName: "",
        studentPhone: "",
        studentMessage: "",
    })
    const handleChangeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormInput({ ...formInput, [name]: value });
    };
    const handleSubmitForm = (e) => {
        e.preventDefault();
    };
    const {
        studentEmail,
        studentName,
        studentPhone,
        studentMessage,
    } = formInput;
    return (
        <div className='contact'>
            <Student formInput={formInput} />
            <div className='form-contact2'>
                <h2>Contact US</h2>
                <form className="form-sample " >
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name='studentName' value={studentName} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label" >Email</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name='studentEmail' value={studentEmail} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Phone</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" name='studentPhone' value={studentPhone} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-3 col-form-label">Message</label>
                        <div className="col-sm-9">
                            <textarea className="form-control" defaultValue={""} name='studentMessage' value={studentMessage} onChange={handleChangeInput} />
                        </div>
                    </div>
                    <button onClick={handleSubmitForm}>Sumit</button>
                </form>
            </div>

        </div>
    )
}

export default Mycontact