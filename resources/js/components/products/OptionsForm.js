import React from 'react'

const OptionsForm = (props) => {
    return (
        <div>
            
            <div className="form-group">
                <label>Product options</label>
                <input type="text" className="form-control" onChange={e => setQuantity(e.target.value)} />
            </div>

        </div>
    )
}

export default OptionsForm
