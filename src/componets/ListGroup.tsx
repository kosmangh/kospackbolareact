//import { MouseEvent } from "react";

import { useState } from "react";

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

//{items [], heading : string}
interface ListGroupProps {
  items:string[];
  heading:string;

  //passing function through Props
  //{items: string} => void
  onSelectItem: (item: string) => void; // onSelectItem is a typescript property retunrs nothing(void) at start
}

function ListGroup1({items, heading,onSelectItem} : ListGroupProps) {
       //let menus = ['Supervisor','Drivers','Revenue Collectors',
        // 'Bola Bills','Client Payments'];
        //let slectedMenuIndex = 0;
        // below is the state hook that tells the the above variables content will change, 
        // when added it imports it automatically
        const [selectedMenuIndex, setselectedMenuIndex] = useState(-1);

        const handleSelectItem = (item: String) => {
          console.log(item)

        } 

        //below is an event handler
        //const clickResponse = (event: MouseEvent)=> console.log(event);

       // decalsred a message as avariable

  return (

 /*     <ul className="list-group">
              {items.map((item, index)=> 
              <li className={slectedIndex === index ? "list-group-term active": 'list-group-term'} key={item} 
                onClick={clickResponse}>{item}
              </li>)}
         </ul>  */
      // <> represent a fragment tag 
      
      <>       
         <h1> {heading} </h1>
            {items.length===0 && <p> No Meenu Selected</p>}
             
         <ul className="menu-list">
              {items.map((menuitem, index)=> 
              <li className={
                    selectedMenuIndex === index 
                    ? "menu-list-term active"
                    : 'menu-list-term'
                  } 
                  key={menuitem} 
                  onClick={()=> {
                    setselectedMenuIndex(index);
                    onSelectItem(menuitem)
                  }}
                  /*onClick={clickResponse}*/
                  
                  >
                  {menuitem}
              </li>)}
         </ul>
      </>
    )
}

export default ListGroup1;

/* <h1> Active List Group </h1>
      <ul ClassName="list-group"> 
      <li ClassName="list-group-item active" aria-current="true">An active item</li>
      <li ClassName="list-group-item">A second item</li>
      <li ClassName="list-group-item">A third item</li>
      <li ClassName="list-group-item">A fourth item</li>
      <li ClassName="list-group-item">And a fifth one</li>
      </ul> 
      </>      
      */
