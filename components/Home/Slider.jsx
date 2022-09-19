import Header from '../../components/Header'
import image1 from '../../public/images/home-banner/Cloud-Security.jpg'
import image2 from '../../public/images/bg-testimonial.jpg'
import image3 from '../../public/images/home-banner/Data-Privacy.jpg'
import Image from 'next/image'
import {useState} from "react"
import arrowl from '../../public/img/arrowl.png'
import arrowr from '../../public/img/arrowr.png'
import styles from '../../styles/Featured.module.css'



function Slider() {
    const [index, setIndex] = useState(0);
    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    const images = [
        {
         title:"SOC 2 Type 2 Cloud  ",
         img:image3
        },
        {
            title:"ISO/IEC Audits for Data ",
            img:image1
           },
           {
            title:"ISO/IEC 27000 Audits",
            img:image2
           }
    ];
  return (
    <>
    <Header/>
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src={arrowl} alt="" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((item, i) => (
           
          <div className={styles.imgContainer} key={i}>
            <Image  src={item.img} alt="" layout="fill" objectFit="contain" />
            <div className={styles.bottom}  >{item.title}</div>
          </div>
         
         
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src={arrowr} layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
    </>
  );
};

export default Slider;