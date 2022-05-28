import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#003399',
    color: "#33ccff"
}
const Redirect = (url) => {
    const link = Object.values(url)[0]
    useEffect(() => {
        setTimeout(() => {
            window.location.href = link;
        }, 2500);
    }, []);
    return (
        <div style={style}>
            <HashLoader color="#33ccff" size="100px"/>
            <h2>Loading...</h2>
        </div>
    );
}

export default Redirect;