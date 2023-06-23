import React, {useState, useRef} from 'react'
import './Delete.css';
import deleteResource from '../../api/deleteResource';

const Delete = ({delId}) => {

  const [askForConfirmation, setAskForConfirmation] = useState(false);

  function deleteRecord(e)
  {
    setAskForConfirmation(true);
    if(e)
    {
      if(e==='no')
      {
        setAskForConfirmation(false);
      }
      else if(e==='yes')
      {
        const deleteData = async () =>
        {
          return deleteResource('/users/',delId);
        }

        deleteData()
        .then(res=>console.log(res));

        setAskForConfirmation(false)
      }
    }


  }

  return (
    <>
    {
      askForConfirmation && 

      <div className='cofirmationContainer'>
        <div className='cofirmation'>
          <p>Are your sure ?</p>
          <div className='btnGroup'>
            <button className='btnNo' onClick={()=>deleteRecord('no')}>NO</button>
            <button className='btnYes' onClick={()=>deleteRecord('yes')} >YES</button>
          </div>
        </div>
      </div>
    }
      <button onClick={deleteRecord}>Delete</button>
    </>
  )
}

export default Delete