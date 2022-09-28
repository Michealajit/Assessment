import { useState ,useEffect} from "react";
import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router';
import Link  from "next/link";

 const Addblog = ({blogs}) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem( "assessment")) {
     router.push("/login");
    }
  }, []);
    const[inputs,setInputs] = useState({});
    const  handleClick = async ()=>{
      try {
        const blog = {inputs};
        const res = await fetch('https://assessment-ny3b-f358af8nt-michealajit.vercel.app/api/blog', {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        console.log(res.data)
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
          const handleEdit = (id) =>{
            router.push(`/${id}/update`);
          }
          const handleDelete = async (id) => {
           
            try {
                await fetch(`https://assessment-ny3b-f358af8nt-michealajit.vercel.app/api/blog/${id}`, {
                    method: "Delete"
                });
    
                router.push("/blog");
            } catch (error) {
                console.log(error)
            }
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
      }}>Add Blog
       <button  style={{ padding: 10, width:100,marginTop: 20,borderStyle: "solid",
  borderWidth: 0.5,marginBottom:20,marginLeft:1100}} onClick={handleLg}>LOGOUT</button>
        <input onChange={handleChange} style={{ padding: 20, marginBottom: 20 , borderStyle: "solid",
  borderWidth: 0.5}} name="title" type='text'  placeholder='Title' />
        <input name="img" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Image only url will work ' />
   <input name="currentdate" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='date month year' />
  <textarea name='p1' rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph' />
  <textarea name='p2' rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph ---' />
  <input name="s1" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
   <textarea name='p3' rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph' />
  <textarea name='p4' rows="70" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph ---' />
  <input name="l1" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l2" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l3" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l4" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="p5" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for below Points' />
  <input name="l5" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l6" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l7" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l8" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l9" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l10" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l11" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="s2" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
  <textarea name='p6' rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph ---' />
  <input name="s3" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Title' />
  <input name="p7" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
  <input name="l12" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l13" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l14" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <input name="l15" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Bullet Points' />
  <textarea name='p8' rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph --- End for Above Points' />
   <input name="s4" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for Below Paragraph' />
  <textarea name='p9' rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph --- ' />
  <input name="s5" type='text' onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }}  placeholder='Header for End Paragraph' />
  <textarea name='p10' rows="30" cols="146" onChange={handleChange} style={{ padding: 20, marginBottom: 20,borderStyle: "solid",
  borderWidth: 0.5 }} placeholder='Paragraph --- ' />

 <button  style={{ padding: 10, width:100,marginTop: 20,borderStyle: "solid",
  borderWidth: 0.5}} onClick={handleClick}>Submit</button>
   <main id="content"  role="main">
  
    {blogs.map(blog=>{
        return(

            <div className="blog-all-wrap" style={{display:"flex",flexDirection:"row",justifyContent: "center",}} key={blog._id} >
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="single-blog mb-30">
                        <div className="blog-img">
                      
                        <Link href={`/blog/${blog._id}`}>
                           <img style={{cursor:"pointer"}} src={blog.inputs.img} alt=""/>
                           </Link>
                        </div>
                        <div className="blog-content-wrap">
                            <span>Security</span>
                            <div onClick={()=>handleEdit(blog._id)} style={{height:1,width:25,marginLeft:250,cursor:"pointer",marginTop:5}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"/></svg>
                            </div>
                            <div onClick={()=>handleDelete(blog._id)} style={{height:1,width:25,marginLeft:300,cursor:"pointer"}}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
                            </div>
                            <div className="blog-content">
                            <Link href={`/blog/${blog._id}`}>
                                <h4 style={{cursor:"pointer"}} >{blog.inputs.title}</h4>
                                </Link>
                                <p>{blog.inputs.p1.slice(0,312)}</p>
                            
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>

    </div>
    
    )
        })}

    
     

</main>

    
    </div>
  )
}

Addblog.getInitialProps = async () => {
  const res = await fetch('https://assessment-ny3b-f358af8nt-michealajit.vercel.app/api/blog');
  const { data } = await res.json();


  return { blogs: data }
}

export default Addblog;