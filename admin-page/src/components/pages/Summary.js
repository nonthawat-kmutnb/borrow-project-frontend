import React, { useState } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Summary  from "../css/Summary.css";
import swal from 'sweetalert';


const data = [
  { name: "name", tel: '08xxxxxxxx', serial: 'xxxxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment',status:true},
  { name: "name", tel: '08xxxxxxxx', serial: 'xxxxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment',status:false},
  { name: "name", tel: '08xxxxxxxx', serial: 'xxxxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment',status:true},
]

function App() {
  const [value, setValue] = useState(false);
  const [Text, setText] = useState('Non return');

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Role",
        accessor: "role",
      },
    ],
    []
  );
  
  function ShowText(val) {
    if (val) {
      return 'Return';
    }
    return 'Non Return';
  }
  

  const handleChange = (val) => { 
    
        swal({
            title: "Are you sure?",
            text: "Confirmed for sure or not that it was returned",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Update status success", {
                icon: "success",
                
              });
              setValue(!value);
            } else {
              // swal("Your imaginary file is safe!");
            }
          });
        
      }; 


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
            <tr>
              
              <th>Name</th>
              <th>Tel</th>
              <th>Serial Number</th>
              <th>Due Date</th>
              <th>Checkout</th>
              <th>Comment</th>
              <th>Status</th>
              <th>
              </th>
            </tr>

            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.tel}</td>
                  <td>{val.serial}</td>
                  <td>{val.due_date}</td>
                  <td>{val.checkout}</td>
                  <td>{val.comment}</td>
                  <td>

                  <>
                      <input
                        checked={value}
                        onChange={() => handleChange(val.id)}
                        className="react-switch-checkbox"
                        id={`react-switch-new`}
                        type="checkbox"
                      />
                      <label

                      style={{ background: value && "#97FDAD"}}
                        className="react-switch-label"
                        htmlFor={`react-switch-new`}
                      >
                      <div className="Show-status">
                        <p style={{fontSize: '0.8rem'}}>
                        <span className="react-span-status" style={{color: value ? "#0F7605":'#8E0000',fontWeight: 'bold',borderColor: 'black'}}>
                        {ShowText(value)}
                        </span>
                        </p>
                      </div>
                      </label>
                    </>

                </td>
                </tr>
              )
            })}
          </table>
          </div>
        </div>

          <HamburgerMenu />
    </AnimatedPage>

  );
}

export default App;
