import {GoogleLogin} from 'react-google-login';

const clientId="224768829691-84danqbke2s03rh99oql5jh3lqh0bp44.apps.googleusercontent.com";

const onSuccess=(res)=>{
    console.log("Logout successful");
}
function Logout(){
    return (
        <div id="signInBtton">
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />
        </div>
    )
}
export default Logout; 