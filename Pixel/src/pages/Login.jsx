import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useState } from 'react'
import config from "../credentials/config";

function Login() {
    const  [user, setUser] = useState(null);

    const googleClientId = config.GOOGLE_CLIENT_ID;

    const handleLogin = async (googleData) => {
        try {
         // const response = await axios.post(BASE_URL + "api/auth/google/", {
          //  token: googleData.credential,
          //});
          console.log(googleData);
        } catch (error) {
          console.error(error);
        }
    };

    const handleLogout = () => {
        setUser(null);
      };
  return (
    <>
       <GoogleOAuthProvider clientId={googleClientId}>
                <div>
                  {user ? (
                    <div>
                      <button
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="spacer">
                      <GoogleLogin
                        shape="square"
                        onSuccess={handleLogin}
                        onFailure={console.error}
                      />
                    </div>
                   
                  )}
                </div>
              </GoogleOAuthProvider> 
    </>
  )
}

export default Login
