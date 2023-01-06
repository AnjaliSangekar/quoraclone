import React, { useState, useEffect } from 'react'

function AddQuestion(props) {
  const [ setAddQues ] = useState(true); //addQues

  useEffect(() => {
    if (props.trigger === true) {  // ==
        document.querySelector('.fullWidth').classList.add('opacity-100')
    }
}, [props.trigger])

  return (props.trigger) ? (
    <>
      <div className='bg-bark fullWidth' onClick={() => props.setTrigger(false)}>
        
      </div>
      <div className='quesCcont'>
          <div className='quesTop'>
            <div className='quesHeader d-flex justify-content-between'>
              <div className='quesHeadClose'>
                <button className='btn closeBtn' onClick={() => props.setTrigger(false)}>x</button>
              </div>
              <div className='quesHeadBtn d-flex justify-content-evenly'>
                <button className='btn' onClick={() => setAddQues(true)}><h4>Add question</h4></button>
                <button className='btn' onClick={() => setAddQues(false)}><h4>Create question</h4></button>
              </div>
            </div>
            <div className='quesTopBtn d-flex'>
              <a href='/'> </a>
              <p>%</p>

            </div>
            <div className='quesInput'>
              <input type='text' placeholder='Start your question with "what", "Why" and How' />
            </div>
            <hr></hr>
          </div>
          <div className='quesBottom'>
            <hr></hr>
            <div className='quesBtn d-flex'>
              <button className='btn' onClick={() => props.setTrigger(false)}>Cancel</button>
              <button className='btn btn-primary rounded-pill'>Add question</button>
            </div>
          </div>
        </div>
    </>
  ) : '';
}

export default AddQuestion;
