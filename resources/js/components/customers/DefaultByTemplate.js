import React from 'react'

const DefaultByTemplate = () => {
    return (
        <div>
              <div className="col-md-4">
                                                       
                <div className="form-group">
                    <label>Name*</label>
                    <input type="text" className="form-control"  onChange={e => setName(e.target.value)} />
                </div>
            </div>

        </div>
    )
}

export default DefaultByTemplate
