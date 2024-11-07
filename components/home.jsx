import {Link } from 'react-router-dom';

function Home() {
    return (
    <div>
      <div>
        <center>
        <Link  to='/testSeries'><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_1000,f_auto,q_auto/v1730114893/gxhkptjnfsrn81rbpydr.png?_upload_ref=ic_img_tool" alt="test series" /></Link></center>
        <br /><br /><br /><br /><br /> 
      
      </div>
        <div style={{display:'flex'}}>
          <div style={{fontSize:"35px",fontWeight:"600",paddingLeft:"100px",paddingTop:"20px"}}>
            <div>Your Dream.</div>
            <div>Our Expertise.</div>
            <br />
            <h2 style={{fontSize:"20px", fontWeight:"500",paddingBottom:"10px "}}>What brings you to us today?</h2>
            
            <button style={{fontSize:"17px", fontWeight:"600",marginRight:"20px",padding:"5px 15px",borderRadius:"25px",border:' 2px solid',color:'#348feb'}}onMouseOver={(color)=>color.currentTarget.style.backgroundColor='#c1c2c9 '}
              onMouseOut={(color) => color.currentTarget.style.backgroundColor = 'transparent'}>NEET</button>

            <button style={{fontSize:"17px", fontWeight:"600",marginRight:"20px",padding:"5px 15px",borderRadius:"25px",border:' 2px solid',color:'#348feb'}}onMouseOver={(color)=>color.currentTarget.style.backgroundColor='#c1c2c9 '}
              onMouseOut={(color) => color.currentTarget.style.backgroundColor = 'transparent'}>JEE</button>

            <button style={{fontSize:"17px", fontWeight:"600",marginRight:"20px",padding:"5px 15px",borderRadius:"25px",border:' 2px solid',color:'#348feb'}}onMouseOver={(color)=>color.currentTarget.style.backgroundColor='#c1c2c9 '}
              onMouseOut={(color) => color.currentTarget.style.backgroundColor = 'transparent'}>Class 6-10</button>
            
            </div>
            <div style={{paddingLeft:"100px"}}>
              <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1729604923%2FStudy_eicbtr.webp&w=640&q=75" alt="Allen institute" style={{width:"500px"}}/>
          </div>
          </div>
          <center>
          <div style={{width:"1000px",paddingTop:"60px"}}>
            <Link to='/testSeries'><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729680516/Homepage_Banner_1_grtip1.png" alt="Test Series" /></Link>
          </div>
          </center>
          <div style={{fontSize:"40px",fontWeight:"500",paddingTop:"70px",textAlign:"center"}}>Our Remarkable Results in 2024</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingLeft:"100px",paddingRight:"100px",paddingTop:"30px"}}>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center",width: "400px",padding: "16px", borderRadius: "8px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center", backgroundColor: "#fff",transition: "transform 0.3s ease",margin: "16px",cursor: "pointer"}}
  onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-40px)"}
  onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
>

   /* resuklt cards */

  <Link to="/result">
    <img
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_450,f_auto,q_auto/v1727953193/hbdu8gunuoob1rwhfnyy.png?_upload_ref=ic_img_tool"
      alt="topper neet"
      style={{width: "100%", height: "auto",borderRadius: "4px",marginBottom: "12px"}}
    />
  </Link>
  <div style={{ padding: "8px 0" }}>
    <p style={{ margin: "8px 0", color: "#333" }}>Allen Online Programs NEET (UG) 2024 Results</p>
    <p style={{ margin: "8px 0", color: "#333" }}>24 Students have scored 700+</p>
    <Link to="/result" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
      View Detailed Result
    </Link>
  </div>
</div>


<div style={{display: "flex",flexDirection: "column",alignItems: "center",width: "400px",padding: "16px",borderRadius: "8px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center",backgroundColor: "#fff",transition: "transform 0.3s ease",margin: "16px",cursor: "pointer"}}
  onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-40px)"}
  onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
>
  <Link to="/result">
    <img
      src="https://res.cloudinary.com/dpzpn3dkw/image/upload/w_600,f_auto,q_auto/v1727953163/oebyukgkusnrgafhi6kh.png?_upload_ref=ic_img_tool"
      alt="topper Jee"
      style={{ width: "100%",height: "auto", borderRadius: "4px", marginBottom: "12px" }}
    />
  </Link>
  <div style={{ padding: "8px 0" }}>
    <p style={{ margin: "8px 0", color: "#333" }}>Allen Online Programs JEE (Adv.) 2024 Results</p>
    <p style={{ margin: "8px 0", color: "#333" }}>14 Students have made it to the top 500 AIR</p>
    <Link to="/result" style={{ color: "#007bff", textDecoration: "none", fontWeight: "bold" }}>
      View Detailed Result
    </Link>
  </div>
</div>
</div>
        <div style={{fontSize : "25px",fontWeight:"500", paddingLeft:"116px", paddingTop:"80px"}}>
          Discover the Perfect Online Program
        </div>
      <div style={{display:"flex",justifyContent:"space-between",width:"100%",paddingLeft:"100px",paddingRight:"100px0",paddingTop:"40px",height:"auto",borderRadius:"8px"}}>
        
        <div style={{display: "flex",flexDirection: "column", alignItems: "center",width: "300px",padding: "16px", borderRadius: "8px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center", backgroundColor: "#fff",transition: "transform 0.7s ease",margin: "16px",cursor: "pointer"}}
          onMouseOver={(card)=>card.currentTarget.style.transform = "translateY(-40px)"}
          onMouseOut={(card)=>card.currentTarget.style.transform = "translateY(0px)"}>
          <Link><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081052/200_jee_pnsy0n.webp" alt="Jee preparation" />
          <h4 style={{fontSize:"25px",fontWeight:"500"}}>JEE </h4>
          </Link>
        </div>

        <div style={{display: "flex",flexDirection: "column", alignItems: "center",width: "300px",padding: "16px", borderRadius: "8px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center", backgroundColor: "#fff",transition: "transform 0.7s ease",margin: "16px",cursor: "pointer"}}
          onMouseOver={(card)=>card.currentTarget.style.transform = "translateY(-40px)"}
          onMouseOut={(card)=>card.currentTarget.style.transform = "translateY(0px)"}>
          <Link><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081871/200_neet_nd7zeb.webp" alt="neet prep" />
          <h4 style={{fontSize:"25px",fontWeight:"500"}}>NEET</h4></Link>
        </div>

        <div style={{display: "flex",flexDirection: "column", alignItems: "center",width: "300px",padding: "16px", borderRadius: "8px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center", backgroundColor: "#fff",transition: "transform 0.7s ease",margin: "16px",cursor: "pointer"}}
          onMouseOver={(card)=>card.currentTarget.style.transform = "translateY(-40px)"}
          onMouseOut={(card)=>card.currentTarget.style.transform = "translateY(0px)"}>
          <Link><img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729081870/200_grade_6_10_lakdfs.webp" alt="classrom program" />
          <h4 style={{fontSize:"25px",fontWeight:"500"}}>Grade 6-10</h4></Link>
        </div>
      </div>

      <div style={{display:"flex",paddingTop:"60px", paddingLeft:"120px", justifyContent:"space-between" }}>
        <div style={{marginRight:"30px",paddingTop:"90px"}}>
          <h3 style={{fontSize:"23px", fontWeight:"500",color:"#348feb"}}>TESTIMONIALS</h3>
          <h2 style={{fontSize:"30px", fontWeight:"500"}}>Here's what students are saying . . .</h2>
        </div>

        <div style={{display: "flex",flexDirection: "column", alignItems: "center",width: "330px",height:"450px",padding: "16px", borderRadius: "20px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center", backgroundColor: "#fff",transition: "transform 0.7s ease",margin: "16px",cursor: "pointer"}}
          onMouseOver={(card)=>card.currentTarget.style.transform = "translateY(-40px)"}
          onMouseOut={(card)=>card.currentTarget.style.transform = "translateY(0px)"}>
          <p style={{fontSize:"18px",fontWeight:"350",paddingTop:"30px", paddingBottom:"80px", paddingRight:"10px",paddingLeft:"10px"}}>"I wanted to stay with my family while preparing for JEE, so I chose ALLEN Online Programs. The faculty was great & the live classes, daily homework & test series helped me secure a great score & rank!"</p>
          <div style={{display:'flex',}}>
          <div>
          <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FAvik-128x128_vbkt1r.webp&w=64&q=100" alt="Neet topper" />
          </div>
          <div>
          <h4 style={{fontWeight:"600"}}>AVIK DAS </h4>
          JEE Adv. 2024, AIR 69
          </div>
          </div>
        </div>

        <div style={{display: "flex",flexDirection: "column", alignItems: "center",width: "330px",height:"450px",padding: "16px", borderRadius: "20px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",textAlign: "center", backgroundColor: "#fff",transition: "transform 0.7s ease",margin: "16px",cursor: "pointer"}}
          onMouseOver={(card)=>card.currentTarget.style.transform = "translateY(-40px)"}
          onMouseOut={(card)=>card.currentTarget.style.transform = "translateY(0px)"}>
          <p style={{fontSize:"18px",fontWeight:"350",paddingTop:"30px", paddingBottom:"30px", paddingRight:"10px",paddingLeft:"10px"}}>"I took NEET in 2023 but didn’t achieve my desired score, so I reattempted in 2024 with ALLEN Online Programs. The top-quality faculty, study material, & personalised experience on the ALLEN app helped me improve my score by 100 marks from my previous attempt."</p>
          <div style={{display:'flex',}}>
          <div>
          <img src="https://allen.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpzpn3dkw%2Fimage%2Fupload%2Fv1725858116%2FGalib-128x128_1_ktw4sw.webp&w=64&q=100" alt="Neet topper" />
          </div>
          <div>
          <h4 style={{fontWeight:"600"}}>SEKH GALIB RAZA </h4>
          NEET-UG 2024, <br />
          Score 695/720
          </div>
          </div>
        </div>
      </div>


      <center>
      <div style={{paddingLeft:"100px"}}>
          <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729668504/download_app_light_mode_uzncho.webp" alt="download app" />
        </div>
      </center>
    
      <footer>
        <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"100px"}}>
          <span>
          <ul>  
          <li style={{fontSize:"18px",fontWeight:"500",paddingBottom:"20px"}}> About  </li>
    
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> About us </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Blog </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> News </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link to='/testSeries'> MyExamEduBlogs </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Privacy policy </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Public notice </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Careers </Link>
          </li>
          </ul>
          </span>

          <span>
          <ul>  
          <li style={{fontSize:"18px",fontWeight:"500",paddingBottom:"20px"}}> Help & Support  </li>
    
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Refund Policy </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Transfer Policy </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Terms & Condition </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link to='/testSeries'> Contact us </Link>
          </li>
          </ul>
          </span>

          <span>
          <ul>  
          <li style={{fontSize:"18px",fontWeight:"500",paddingBottom:"20px"}}> Popular goals  </li>
    
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Neet UG </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> JEE Advanced </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> 6th to 10th </Link>
          </li>
          </ul>
          </span>

          <span>
          <ul>  
          <li style={{fontSize:"18px",fontWeight:"500",paddingBottom:"20px"}}> Courses </li>
    
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Ultimate Program </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Distance Learning </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Online Test Series </Link>
          </li>
          
          </ul>
          </span>

          <span>
          <ul>  
          <li style={{fontSize:"18px",fontWeight:"500",paddingBottom:"20px"}}> Centers  </li>
    
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link > Kota </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Banglore </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Indore </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link to='/testSeries'> Delhi </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Noida </Link>
          </li>
          
          </ul>
          </span>

          <span>
          <ul>  
          <li style={{fontSize:"18px",fontWeight:"500",paddingBottom:"20px"}}> Exam Information  </li>
    
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> JEE Main </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> JEE Advanced </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> NEET UG </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link to='/testSeries'> Class 10 </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Class 12 </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> Olympiad Eaxm </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> NEET Online Test Series </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> JEE Online Test Series </Link>
          </li>
          <li style={{fontSize:"14px",fontWeight:"350",paddingBottom:"10px"}}>
          <Link> JEE Main Online Test Series </Link>
          </li>
          </ul>
          </span>
          <hr style={{color:"black"}}/>
        </div> 
        
        <div style={{display:'flex', justifyContent:"space-between",paddingTop:"40px",paddingLeft:"100px"}}>
          <div style={{fontSize:"14px"}}>
          ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
          </div>
          <div style={{display:"flex",width:"180px"}}>
            <span style={{paddingRight:"10px"}}>
            <Link to="https://www.youtube.com/@ALLENOnlinePrograms"><img src="https://img.icons8.com/?size=48&id=19318&format=png" alt="Youtube" /></Link></span>
            <span style={{paddingRight:"10px"}}>
            <Link to="https://www.instagram.com/allenonlineprograms/"><img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="instagram" /></Link>
            </span>
            <span style={{paddingRight:"10px"}}>
            <Link to="https://www.facebook.com/allenonlineprograms"><img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="facebook" /></Link>
            </span>
            <span style={{paddingRight:"10px"}}>
            <Link to="https://twitter.com/ALLENDigital_In"><img src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png" alt="x" /></Link>
            </span>
            <span style={{paddingRight:"10px"}}>
            <Link to="https://www.linkedin.com/company/weareallendigital/"><img src="https://img.icons8.com/?size=48&id=13930&format=png" alt="linkedin" /></Link>
            </span>
          </div>
        </div>
      </footer>
      
        </div>
     )
  }
  export default Home