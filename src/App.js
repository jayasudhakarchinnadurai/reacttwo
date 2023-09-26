import './App.css';
import React, {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

 function App() {
const[count, setcount]=useState(0)

  const data=[
    {
    img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item: "Fancy Product",
    btn:"View options",
    amt:"$40.00 - $80.00",
    star:"."
    

    },

    {
    img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    item:"special item",
    btn:"Add card",
    amt:"$20.00 $18.00",
    star:"★★★★★"
    },
    {
      img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      item:"Sale Item",
      btn:"Add card",
      amt:"$50.00 $25.00",
      star:"."
      },
      {
        img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
        item:"Popular Item",
        btn:"Add card",
        amt:"$40.00",
        star:"★★★★★"
        },
        {
          img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
          item:"Sale item",
          btn:"Add card",
          amt:"$50.00 $25.00",
          star:"."
          },
          {
            img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
            item:"Fancy Product",
            btn:"Add card",
            amt:"$120.00 - $280.00",
            star:".",
            },
            {
              img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
              item:"Special Item",
              btn:"Add card",
              amt:"$20.00 $18.00",
              star:"★★★★★",
              },
              {
                img:"https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
                item:"Popular Item",
                btn:"Add card",
                amt:"$40.00",
                star:"★★★★★",
                },
              ]
 
return (
 
    <div className='data'>
     <div className='navbor'>
      <h6>Start Bootstrap</h6>
      <p>Home</p>
      <p>About</p>
      <label>Shop</label>
      <select className='option'>
        <option>All products</option>
        <option>Popular items</option>
        <option>New Arrivals</option>
      </select>
    </div><br></br>
    <p className='cardcount'>card{" "}{count}</p>
      <div className='shopcolor'>
        <h1 className='shop1' style={{color:"white"}}>Shop in style</h1>
        <h6 className='shop' style={{color:"white"}}>With this shop hompeage template</h6>
      </div><br></br><br></br><br></br><br></br>
   
   <div className='display col-lg-10 col-md-20 col-sm-40'>

    {data.map((props)=>{
      return <Cards
      props={props}
      setcount={setcount}
      count={count}
      />
      

   
    })}

   </div>
    
   
   <div className='bottom'>
    <p style={{color:'white'}} className="web">Copyright © Your Website 2022</p>
   </div>
   
   
   </div>
  
  );
}
export default App;




function Cards({props,setcount,count}){
  const [show, setshow]=useState(false)
function addcard(){
    setshow(!show)
    setcount(count+1)
   }             
   function removecard(){
    setshow(!show)
    setcount(count-1)
   }             
  return(
<div className='data1'>
      <Card style={{ width: '13rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
      <h5 className='center'>{props.item}</h5>
      <p className='center1'>{props.star}</p>
      <p className='center'>{props.amt}</p><br></br><br></br>
      {!show?<Button className='btn center ' onClick={addcard} variant="primary">Addcart</Button>:""}
      {show?<Button className='btn center' onClick={removecard}  variant="danger">Removecart</Button>:""}
      </Card.Body>
    </Card>
    </div> 
  )
}


