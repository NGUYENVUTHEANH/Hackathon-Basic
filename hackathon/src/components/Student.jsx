import React from 'react'
import './Mycontact.css'

function Student({ formInput }) {
    return (
        <div className='form-contact'>
            <h2>Contact Info</h2>
            <form className="form-sample " >
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control1" name='studentName' value={formInput.studentName} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label" >Email</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" name='studentEmail' value={formInput.studentEmail} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Phone</label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" name='studentPhone' value={formInput.studentPhone} />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Message</label>
                    <div className="col-sm-9">
                        <textarea className="form-control" defaultValue={""} name='studentMessage' value={formInput.studentMessage} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Student