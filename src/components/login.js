import {GoogleLogin} from 'react-google-login';

const clientId="224768829691-84danqbke2s03rh99oql5jh3lqh0bp44.apps.googleusercontent.com";
const clientSecret="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";

const onSuccess=(res)=>{
    console.log("Login successful, Current User : ",res.profileObj);
}
const onFailure=(res)=>{
    console.log("Login Failed, res: ",res);
}
function Login(){
    return (
        <div id="signInBtton">
            <GoogleLogin 
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
        </div>
    )
}
export default Login;