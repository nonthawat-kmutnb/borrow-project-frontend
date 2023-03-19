import React from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Products  from "../css/Products.css";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

function App() {
  const data = [
    { name: "name", serial: 'xxxxxxxxxx', catagory: "catagory" ,type:'type'},
    { name: "name", serial: 'xxxxxxxxxx', catagory: "catagory" ,type:'type'},
    { name: "name", serial: 'xxxxxxxxxx', catagory: "catagory" ,type:'type'},
  ]
  const navigate = useNavigate();

  const navigateToEditproduct = () => {
    navigate('/admin/edit-product');
  };

  const deleteTableRows = (no) => {
    console.log(no)
    swal({
      title: "Are you sure?",
      text: "Confirmed for sure or not that it was returned",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Delete success", {
          icon: "success",
          
        });

      } else {
        // swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <AnimatedPage>
  
      <div className='Products-container-Top'>
        <div>
          <h1>Products</h1>
        </div>
      </div>
      
      <div className='Products-container-Content' style={{backgroundColor: '#dddddd'}}>
          <div className='Products-container-Table'>
          <table striped="columns">
            <tr >
              
              <th>id</th>
              <th>Name</th>
              <th>Serial Number</th>
              <th>Category</th>
              <th>Type</th>  
              <th></th> 
              
            </tr>
            {data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.serial}</td>
                  <td>{val.catagory}</td>
                  <td>{val.type}</td>
                  <td>
                  <button onClick={navigateToEditproduct}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={()=>(deleteTableRows(val.serial))}
                    className="delete-button"
                  >
                    Delete
                  </button>
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
