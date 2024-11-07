import {Link} from 'react-router-dom';

function Errorpage(){
    return <div>
        <h1>Error 404!</h1>
        <p>return to home errorPage</p>
        <Link to='/'>Home</Link>       
    </div>
}
export default Errorpage;   