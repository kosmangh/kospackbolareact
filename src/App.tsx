// import Message from "./message";
//import ListGroup from "./componets/ListGroup";
import ListGroup1 from "./componets/ListGroup";
import TestCommand from "./componets/testCommands";
import Alert from "./componets/Alert";


function App()  {
  let menus = ['Add/Edit Supervisor','Add/Edt Drivers','Add/Edit Revenue Collectors',
         'Bola Bills','Client Payments'];
  
      const handlerSelectItem = (item:string) => {
          console.log(item);
      }   

//  return <div> <Message></Message></div>
  return <div> 
    <ListGroup1 items={menus} heading="Bola Suplimentary App" onSelectItem={handlerSelectItem} />
    
     <TestCommand/> 

     <Alert/>
  
  </div>
  
}

export default App; // this exports the component so it can be used somewhere else