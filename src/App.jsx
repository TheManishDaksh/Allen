import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../components/home';
import Courses from '../components/courses';
import TestSeries from '../components/testSeries';
import Scholarship from '../components/scholarship';
import Result from '../components/result';
import StudyMaterials from '../components/studyMaterials';
import Aboutus from '../components/aboutus';
import Errorpage from '../components/errorpage';


function App() {
  return (
    <div class = "display:flex; justify-content:space-between; flex-direction:column;">
      <BrowserRouter>
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 120px',fontWeight:'500',fontSize:"16px" }}>
          <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }} >

            <Link to="/">
              <img src="https://allen.in/logo_light.svg" alt="Allen" className="h-7 cursor-pointer" style={{ width: '100px' }} />
            </Link>
            <Link to="/courses" onMouseOver={(bar)=>bar.currentTarget.style.borderBottom= '4px solid #348feb'}
            onMouseOut={(bar)=>bar.currentTarget.style.borderBottom= 'transparent'}>Courses</Link>
            <Link to="/testSeries" onMouseOver={(bar)=>bar.currentTarget.style.borderBottom= '4px solid #348feb'}
            onMouseOut={(bar)=>bar.currentTarget.style.borderBottom= 'transparent'}>Test Series</Link>
            <Link to="/scholarship"onMouseOver={(bar)=>bar.currentTarget.style.borderBottom= '4px solid #348feb'}
            onMouseOut={(bar)=>bar.currentTarget.style.borderBottom= 'transparent'}>Scholarship</Link>
            <Link to="/result" onMouseOver={(bar)=>bar.currentTarget.style.borderBottom= '4px solid #348feb'}
            onMouseOut={(bar)=>bar.currentTarget.style.borderBottom= 'transparent'}>Result</Link>
            <Link to="/studyMaterials" onMouseOver={(bar)=>bar.currentTarget.style.borderBottom= '4px solid #348feb'}
            onMouseOut={(bar)=>bar.currentTarget.style.borderBottom= 'transparent'}>Study Materials</Link>
            <Link to="/aboutus"onMouseOver={(bar)=>bar.currentTarget.style.borderBottom= '4px solid #348feb'}
            onMouseOut={(bar)=>bar.currentTarget.style.borderBottom= 'transparent'}>About Us</Link>
          </nav>

          <div style={{ display: 'flex', gap: '20px',fontSize:'14px' }}>
            <button style={{padding:"5px 15px",borderRadius:"20px",backgroundColor:'#348feb',color : 'white'}} onMouseOver={(e)=>e.currentTarget.style.backgroundColor='#3449eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>Talk to us</button>

            <button to="/login" style={{padding:"5px 15px",borderRadius:"20px",border:' 2px solid',color:'#348feb'}}     onMouseOver={(color)=>color.currentTarget.style.backgroundColor='#c1c2c9 '}
              onMouseOut={(color) => color.currentTarget.style.backgroundColor = 'transparent'} >Login</button>
          </div>
        </header><br />

        <div style={{ padding: '20px 100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/testSeries" element={<TestSeries />} />
            <Route path="/scholarship" element={<Scholarship />} />
            <Route path="/result" element={<Result />} />
            <Route path="/studyMaterials" element={<StudyMaterials />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path='*' element={<Errorpage/>}/>
           
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App
