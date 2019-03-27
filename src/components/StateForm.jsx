
import React from 'react'
import PropTypes from 'prop-types'

const StateForm = ({text, action, reset, goBack}) => {
    return (
        <div className='well well-lg well-center'>
            <p>{text}</p>
            <div className='full-width center-block'>
                {/* <button className='btn btn-primary pull-left' onClick={()=> {
                    goBack();
                }}>
                    Back
                </button> */}
    
                <button className='btn btn-primary center-block' onClick={() => {
                    if (action) {
                        alert(text);
                    }

                    reset();
                }}>
                    Done
                </button>
            </div>
        </div>
    );
}

StateForm.propTypes = {
    text: PropTypes.string.isRequired,
    action: PropTypes.string,
    reset: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired
};

export default StateForm;
