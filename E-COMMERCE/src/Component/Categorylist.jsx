import categoryimg from "../assets/images/category-11.png";

export default function Categorylist() {
  return (
   <>
     <div className="category mb-3">
        <div className="category-title">
            <h1>Category</h1>
            <hr />
        </div>
        <div className=" mb-2 category-list d-flex justify-content-between align-items-center">
             <div className="category-item d-flex gap-3">
                  <img src={categoryimg} alt="" />
                  <p className="mb-0">Baking material</p>
             </div>
            
            <div className="category-count">
               <span>11</span>
               </div>            
        </div>
        <div className="mb-2 category-list d-flex justify-content-between align-items-center">
             <div className="category-item d-flex gap-3">
                  <img src={categoryimg} alt="" />
                  <p className="mb-0">Baking material</p>
             </div>
            
            <div className="category-count">
               <span>11</span>
               </div>            
        </div>
        <div className="mb-2 category-list d-flex justify-content-between align-items-center">
             <div className="category-item d-flex gap-3">
                  <img src={categoryimg} alt="" />
                  <p className="mb-0">Baking material</p>
             </div>
            
            <div className="category-count">
               <span>11</span>
               </div>            
        </div>
         <div className=" mb-2 category-list d-flex justify-content-between align-items-center">
             <div className="category-item d-flex gap-3">
                  <img src={categoryimg} alt="" />
                  <p className="mb-0">Baking material</p>
             </div>
            
            <div className="category-count">
               <span>11</span>
               </div>            
        </div>
        <div className="mb-2 category-list d-flex justify-content-between align-items-center">
             <div className="category-item d-flex gap-3">
                  <img src={categoryimg} alt="" />
                  <p className="mb-0">Baking material</p>
             </div>
            
            <div className="category-count">
               <span>11</span>
               </div>            
        </div>
        <div className="mb-2 category-list d-flex justify-content-between align-items-center">
             <div className="category-item d-flex gap-3">
                  <img src={categoryimg} alt="" />
                  <p className="mb-0">Baking material</p>
             </div>
            
            <div className="category-count">
               <span>11</span>
               </div>            
        </div>
     </div>
  
     </>
  )
}
