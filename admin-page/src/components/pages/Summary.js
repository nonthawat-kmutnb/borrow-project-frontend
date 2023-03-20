import { React, useState,useEffect } from 'react';
import HamburgerMenu from '../HamburgerMenu';
import AnimatedPage from '../AnimatedPage';
import Summary  from "../css/Summary.css";
import swal from 'sweetalert';
import axios from 'axios';
import axiosInstance from 'axios';
const data = [
  { name: "name", tel: '08xxxxxxxx', serial: 'xxxxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment',status:true},
  { name: "name", tel: '08xxxxxxxx', serial: 'xxxxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment',status:false},
  { name: "name", tel: '08xxxxxxxx', serial: 'xxxxxxxxxx', due_date: "due_date" ,checkout:'checkout',comment:'comment',status:true},
]

function App() {


  const token = localStorage.getItem('token');
  if(!token) {
    window.location.href = "/admin";
  }
  
  const [Text, setText] = useState('Non return');
  const [SummaryData,SetSummaryData] = useState([]);
  
  const fetchData = async()=>{

    axios
    .get("http://localhost:3000/transaction")
    .then(response=>{
      console.log(response.data)
      SetSummaryData(response.data)
    })
    .catch(err=>alert(err))
    
  }

  useEffect(()=>{
    fetchData()// eslint-disable-next-line
  },[])

  function ShowText(val) {
    if (val) {
      return 'Return';
    }
    return 'Non Return';
  }
  
  const config = {
    headers: {
        'Accept': '*/*',
    }
};

  const handleChange = (num,isreturn) => { 
        console.log(num)
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
              }).then((value) => {
              axiosInstance.put(`http://localhost:3000/transaction/status/${num}`,{
              'isReturn': !isreturn},config 
              );
                window.location.href = "/admin/summary";
              });
            }
          });
        
      }; 

    function formatDate(date) {
      
      if (date !== null){
        var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
        if (month.length < 2) 
          month = '0' + month;
        if (day.length < 2) 
          day = '0' + day;
  
        return [year, month, day].join('-');
      }

    }

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
              
              <th>Email</th>
              <th>Tel</th>
              <th>Serial Number</th>
              <th>Due Date</th>
              <th>Checkout</th>
              {/* <th>Comment</th> */}
              <th>Status</th>
            </tr>

            {SummaryData.map((val, key) => {
              return (
                
                <tr key={key}>
                  <td>{val.user.email}</td>
                  <td>{val.user.phoneNumber}</td>
                  <td>{val.serialNumberRef}</td>
                  <td>{formatDate(val.deadline)}</td>
                  <td>{formatDate(val.endDate)}</td>
                  {/* <td>{val.comment}</td> */}
                  <td>
                  {console.log(val.name)}
                  <>
 
                      <button
                       onClick={() => handleChange(val.id,val.isReturn)}
                        style={{ background: val.isReturn && "#97FDAD"}}
                        className="react-switch-label"
                      >
                      <div className="Show-status">
                        <p style={{fontSize: '0.8rem'}}>
                        <span className="react-span-status" style={{color: val.isReturn ? "#0F7605":'#8E0000',fontWeight: 'bold',borderColor: 'black'}}>
                        {ShowText(val.isReturn)}
                        </span>
                        </p>
                      </div>
                      </button>
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
