import React, {useState} from "react";

export default function LoginControl() {
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    }

    const loginMessage = isLoggedIn? '환영합니다!' : '로그인 해주세요!';
    const loginButton = isLoggedIn? '로그아웃' : '로그인';
    return (
        <div style={{display:"flex", alignItems:"center"}}>
            <button style={{
            backgroundColor:"#1899D6", 
            color:"white",
            fontSize: "16px",
            fontWeight: "700",
            borderRadius:"16px",
            border:"solid transparent",
            lineHeight: "24px" }}
          onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}>
                {loginButton}
            </button>
            <div style={{color:'white',margin:"10px"}}>
                {loginMessage}
            </div>
        </div>
    )
}