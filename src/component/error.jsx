import Immage from './hi.jpg';
import { useNavigate } from 'react-router-dom';
function Err(){
    const navigate = useNavigate();
    function handleSubmit1() {
        navigate('/login')
        }
    function handleSubmit2() {
        navigate('/about')
        }    
    return(
        <>
            <div className="nav1">
                <h1>404 ERROR</h1>
                <img src ={Immage} className='shad'></img>
            </div>
            <div className="button">
                <button onClick={handleSubmit1}>Login</button>
                <button onClick={handleSubmit2}>Home</button>
            </div>
        </>
    )
 }
 export default Err;