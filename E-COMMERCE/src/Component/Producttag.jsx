import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Producttag() {
    const [itemlist, setitemlist] = useState([{
        id: 1, title : "Brown"
    },{
        id : 2, title : "Bread"
    }
    ,{
        id : 3, title : "milk"
    }
]);
    function handllist(list){
     const filteritem = itemlist.filter((item) => item.id !== list);

        setitemlist(filteritem);
        console.log(itemlist);
    }

   
  return (
   <div className="product-tag mb-5">
        <div className="category-title">
            <h1>Category</h1>
            <hr />
        </div>
        <div className="product-item "> <div className="tag-item d-flex gap-2 flex-wrap">
            {itemlist.map((item) => (
               <span ><IoMdClose onClick= {()=>handllist(item.id)} size={18} /> {item.title} </span> 
               
            ))}
      
       </div>
      
       </div>
      
   </div>
  )
}
