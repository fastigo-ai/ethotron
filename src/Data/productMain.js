// productData.js
import Image1 from '../assets/productMain/image1.png'
import Image2 from '../assets/productMain/image2.png'
import Image3 from '../assets/productMain/image3.png'
import Image4 from '../assets/productMain/image4.png'
import Image5 from '../assets/productMain/image5.png'
import Image6 from '../assets/productMain/image6.png'
const productCategories = [
  {
    title: "Automation & Industrial Engineering",
    link: "/products/automation-industrial-engineering",
    items: ["FCT Fixtures", "SPMs"],
    image1: Image1, 
    image2: Image2, 
    
  },
  {
    title: "EMC / EMI Testing Solution",
    link: "/products/emc-emi-testing",
    items: [],
    image1: Image3, 
    image2: Image4, 
     
  },
  {
    title: "Test & Measuring Solution",
    link: "/products/test-measuring",
    items: [],
    image1: Image5, 
    image2: Image6, 
     
  },
];

export default productCategories;
