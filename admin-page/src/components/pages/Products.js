import { React, useState,useEffect } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Products  from "../css/Products.css";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function App() {
  
  const navigate = useNavigate();

  const navigateToEditproduct = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  const [productItem,SetproductItem] = useState([]);
  const config = {
    headers: {
        'Accept': '*/*',
    }
  };

  const fetchData = async()=>{

    axios
    .get("http://localhost:3000/productItem")
    .then(response=>{
      console.log(response.data)
      SetproductItem(response.data)
    })
    .catch(err=>alert(err))
    
  }

  useEffect(()=>{
    fetchData()// eslint-disable-next-line
  },[])

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

        }).then((value) => {
          axios.delete(`http://localhost:3000/productItem/${no}`,config)
          window.location.href = "/admin/products";
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
              <th>Room</th>
              <th>room</th> 
              <th>Source</th>
            </tr>
            {productItem.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.product.name}</td>
                  <td>{val.serialNumber}</td>
                  <td>{val.room.name}</td>
                  <td>{val.source.name}</td>
                  <td>
                  <button onClick={()=>(navigateToEditproduct(val.id))}
                    className="edit-button"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={()=>(deleteTableRows(val.id))}
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
