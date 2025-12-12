
//function ListGroup() 
//{
  //  return  <ul ClassName="list-group">
  //<li ClassName="list-group-item">An item</li>
 // <li ClassName="list-group-item">A second item</li>
  //<li ClassName="list-group-item">A third item</li>
  //<li ClassName="list-group-item">A fourth item</li>
  //<li ClassName="list-group-item">And a fifth one</li>
//</ul>;
//}

//export default ListGroup;

function ListGroup1() {
       const items = [
        'Accra',
        'Kuamsi',
        'Tamale',
        'Bola',
        'Sunyani'
     ];

// decalsred a message as avariable
 const getMessage = () => {
   return items.length===0 ? <p> No ietms found </p> : null;
 } 

  return (

      // <> represent a fragment tag 
    
      <>       
         <h1> Bola Rendered List Group </h1>

             {getMessage(3)} 
             
         <ul className="list-group">
              {items.map((item, index)=> 
              <li className='list-group-term' key={item} onClick={()=>
                  console.log(item,index)}>{item}
              </li>)}
         </ul>
      </>

    )

}

export default ListGroup1;

{/* <h1> Active List Group </h1>
      <ul ClassName="list-group"> 
      <li ClassName="list-group-item active" aria-current="true">An active item</li>
      <li ClassName="list-group-item">A second item</li>
      <li ClassName="list-group-item">A third item</li>
      <li ClassName="list-group-item">A fourth item</li>
      <li ClassName="list-group-item">And a fifth one</li>
      </ul> 
      </>      
      */}
