import React,{useContext} from 'react'
import { userContext } from './context';

function ContextExample() {
    const userData=useContext(userContext)
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
              <div className='col'>
                  <div className='card'>
                      <div className='card-header'>
                          <h1 className='text-danger'>useContext Example</h1>
                      </div>
                      <div className='card-body'>
                      
                        <p className='text-primary '>This data is coming from the App Component</p>
                        <small className='text-secondary'>{JSON.stringify(userData)}</small>
                      </div>
                  </div>
              </div>
            </div>
          </div>
     </div>
  )

}


export default ContextExample;
