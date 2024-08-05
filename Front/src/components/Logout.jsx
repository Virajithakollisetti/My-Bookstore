import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';


function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout =()=>{
        try {
            setAuthUser({
                ...authUser,
                user: null,
            });
            localStorage.removeItem("Users");
            toast.success("Logged Out");
            
            setTimeout(()=>{
              window.location.reload();
            },3000);
        } catch (error) {
            toast.error("Error: "+error.message);
            setTimeout(() => {},2000)
        }
    };
  return (
    <div>
        <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
        onClick={handleLogout}>
            Logout</button>
    </div>
  )
}

export default Logout