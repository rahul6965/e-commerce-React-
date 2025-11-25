import React from 'react'
import productimg1 from "../assets/images/productimg1.png";
import { IoCartOutline } from "react-icons/io5";
export default function Productcard() {
    const productlist = [
   
  {
    id: 1,
    img: productimg1,
    discoin: "20%",
    distitle: "Sale",
    publisher: "Country Crock",
    cartitem: "Fresh Fruit",
    title: "Seeds of Change Organic Red Rice",
    rate: "$28.85",
    discount: "$32.80"
  },
  {
    id: 2,
 img: productimg1,
    discoin: "15%",
    distitle: "Offer",
    publisher: "Nature’s Valley",
    cartitem: "Healthy Snack",
    title: "Crunchy Granola Bars Oats & Honey",
    rate: "$12.99",
    discount: "$15.30"
  },
  {
    id: 3,
img: productimg1,
    discoin: "10%",
    distitle: "Discount",
    publisher: "Farm Fresh",
    cartitem: "Vegetables",
    title: "Organic Baby Spinach 250g",
    rate: "$5.40",
    discount: "$6.00"
  },
  {
    id: 4,
    img: productimg1,
    discoin: "25%",
    distitle: "Hot ",
    publisher: "Ocean Spray",
    cartitem: "Beverages",
    title: "Cranberry Juice 1L Bottle",
    rate: "$8.99",
    discount: "$11.99"
  },
  {
    id: 5,
    img: productimg1,
    discoin: "30%",
    distitle: "Sale",
    publisher: "Nestlé",
    cartitem: "Dairy Product",
    title: "Nestlé Everyday Milk Powder 1kg",
    rate: "$14.00",
    discount: "$20.00"
  }
];

  return (
    <>

     <div className="product-cat d-flex justify-content-between align-items-center py-3">
   
        <h1 className='mb-0'>Popular Product</h1>
      <div className="cat-list d-flex gap-3">
        <p style={{color : "red"}}>All</p>
        <p>Baking material</p>
        <p>Fresh Fruits</p>
        <p>Milks & Dairies</p>
        <p>Meats</p>
        <p>Vegetables</p>
      </div>
     </div>
           {productlist.map((item) => (
            <div key={item.id} className="col  px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={item.img} alt="" />
                  
                  <p className="dis-coin">{item.discoin}</p>
                  <p className="dis-title">{item.distitle}</p>
              
              </div>
              <div className="product-content">
                <span className="d-block cat-item">{item.cartitem}</span>
                <a className="product-title" href="">{item.title}</a>
                <p><span>By</span>{item.publisher}</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">{item.rate}</p> <p className="mb-0 discount">{item.discount}</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
         
           
             </div>
             ))}
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
            

              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
            <div className="col px-1">
            <div className="product-card">
              <div className="product-img d-flex justify-content-center align-items-center">
                <img width="80%" src={productimg1} alt="" />
              </div>
              <div className="product-content">
                <span className="d-block cat-item">Fresh Fruit</span>
                <a className="product-title" href="">Seeds of Change Organic Red Rice</a>
                <p><span>By</span>Country Crock</p>
                 <div className="product-btn d-flex justify-content-between">
                  <div className="product-rate d-flex">
                    <p className="mb-0">$28.85</p> <p className="mb-0 discount">$32.80</p>
                  </div>
                  <div className="product-addtocart d-flex">
                    <p className="mb-0">  <IoCartOutline size={16} /> <span>Add</span> </p>
                  
                  </div>
                 </div>

              </div>
            </div>
          </div>
          
        </>
     
  )
}
