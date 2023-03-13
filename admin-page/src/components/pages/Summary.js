import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Summary  from "../css/Summary.css";

function App() {
  const data = [
    { name: "name", tel: '08xxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment'},
    { name: "name", tel: '08xxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment'},
    { name: "name", tel: '08xxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment'},
  ]

  return (
    <AnimatedPage>
  
      <div className='Summary-container-Top'>
        <div>
          <h1>Summary</h1>
        </div>

      </div>
      <div className='Summary-container-Content' style={{backgroundColor: '#dddddd'}}>
          <div className='Summary-container-Table'>
          <table striped="columns">
            <tr >
              
              <th>Name</th>
              <th>Tel</th>
              <th>Due Date</th>
              <th>Checkout</th>
              <th>Comment</th>
              <th></th>
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.tel}</td>
                  <td>{val.due_date}</td>
                  <td>{val.checkout}</td>
                  <td>{val.comment}</td>
                  <td>
                  <button 
                    className="sum-button"
                  >
                    Delete
                  </button>
                </td>
                </tr>
              )
            })}
          </table>
          </div>
          <div className='add_button_container' style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button 
            className="add_button" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    Add
          </button>
          </div>
        </div>

          <HamburgerMenu />
    </AnimatedPage>

  );
}

export default App;
