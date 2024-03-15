import { useSelector } from "react-redux";
import useAuth from "../../useAuth";
import { GoogleButton, LoginBtn,LogoutBtn } from "./Navbar.styles";

const GoogleButtonComponnent = () => {
  const { isAuthenticated, loginWithRedirect,logout } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await loginWithRedirect({
        screen_hint: "signup",
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };
  return isAuthenticated ? (
    <>
    <GoogleButton>
      <b>Sign in as {user?.nickname} </b>
      <br></br> {user?.email}
      </GoogleButton>
      <LogoutBtn onClick={handleLogout}>
        Logout
      </LogoutBtn>
    </>
  ) : (
    <>
      <LoginBtn onClick={handleRegister}>login</LoginBtn>
    </>
  );
};
export default GoogleButtonComponnent;
