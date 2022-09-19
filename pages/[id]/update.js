import { useState,useEffect } from "react";
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router';
import Link  from "next/link";

const updateblog = ({blog}) => {
    const router = useRouter();
    useEffect(() => {
        if (!localStorage.getItem( "assessment")) {
         router.push("/login");
        }
      }, []);
    
    const[inputs,setInputs] = useState({
        title:blog.title,
        img:blog.img,
        currentdate:blog.currentdate,
        p1:blog.p1,
        p2:blog.p2,
        s1:blog.s1,
        p3:blog.p3,
        p4:blog.p4,
        l1:blog.l1,
        l2:blog.l2,
        l3:blog.l3,
        l4:blog.l4,
        p5:blog.p5,
        l5:blog.l5,
        l6:blog.l6,
        l7:blog.l7,
        l8:blog.l8,
        l9:blog.l9,
        l10:blog.l10,
        l11:blog.l11,
        s2:blog.s2,
        p6:blog.p6,
        s3:blog.s3,
        p7:blog.p7,
        l12:blog.l12,
        l13:blog.l13,
        l14:blog.l14,
        l15:blog.l15,
        p8:blog.p8,
        s4:blog.s4,
        p9:blog.p9,
        s5:blog.s5,
        p10:blog.p10

    });
    const  handleClick = async ()=>{
        try {
          const blog = {inputs};
          const id = router.query.id;
          await fetch(`http://localhost:3000/api/blog/${id}`, {
              method: 'PUT',
              headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(blog)
          })
          router.push("/blog");
      } catch (error) {
          console.log(error);
      }
      }
    const handleChange = (e)=>{
        setInputs(
            (prev) =>  {
        return        { ...prev,
              [e.target.name]:e.target.value}
            }
          )
          }
          const  handleLg = ()=>{
            localStorage.clear();
            router.push("/blog");
        }
        
  return (
    <div   style={{
        height: "1000vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop:100,
marginBottom:50
      }}>
       <button  style={{ padding: 10, width:100,marginTop: 20,borderStyle: "solid",
  borderWidth: 0.5,marginBottom:20,marginLeft:1100}} onClick={handleLg}>LOGOUT</button>
        <input value={inputs.title} onChange={handleChange} style={{ padding: 20, marginBottom: 20 , borderStyle: "solid",
  borderWidth: 0.5}} name="title" type='text'  placeholder='Title' />
        <input value={inputs.img} name="img" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Image only url will work ' />
   <input name="currentdate" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} value={inputs.currentdate}  placeholder='date month year' />
  <textarea name='p1' value={inputs.p1} rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph' />
  <textarea name='p2' value={inputs.p2} rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph ---' />
  <input name="s1" value={inputs.s1} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
   <textarea name='p3' value={inputs.p3} rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph' />
  <textarea name='p4' value={inputs.p4} rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph ---' />
  <input name="l1" value={inputs.l1} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l2" value={inputs.l2} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l3" value={inputs.l3} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l4" value={inputs.l4} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="p5" value={inputs.p5} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for below Points' />
  <input name="l5" value={inputs.l5} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l6" value={inputs.l6} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l7" value={inputs.l7} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l8" value={inputs.l8} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l9" value={inputs.l9} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l10" value={inputs.l10} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l11" value={inputs.l11} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="s2" value={inputs.s2} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
  <textarea name='p6' value={inputs.p6} rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph ---' />
  <input name="s3" value={inputs.s3} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Title' />
  <input name="p7" value={inputs.p7} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
  <input name="l12" value={inputs.l12} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l13" value={inputs.l13} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l14 value={inputs.}" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l15" value={inputs.l15} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <textarea name='p8' value={inputs.p8} rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph --- End for Above Points' />
   <input name="s4" value={inputs.s4} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
  <textarea name='p9' value={inputs.p9} rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph --- ' />
  <input name="s5" value={inputs.s5} type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for End Paragraph' />
  <textarea name='p10' value={inputs.p10} rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph --- ' />

 <button  style={{ padding: 10, width:100,marginTop: 20,borderStyle: "solid",
  borderWidth: 0.5}} onClick={handleClick}>Update</button>
  </div>
  )
}
updateblog.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/blog/${id}`);
    const { data } = await res.json();
    const {inputs} =data
    return { blog: inputs }
}

export default updateblog