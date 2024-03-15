import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/auth/authSlice";

const useAuth = () => {
  const { isAuthenticated, user, isLoading,loginWithRedirect,logout } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser({ isAuthenticated, user, isLoading }));
  }, [dispatch, isAuthenticated, user, isLoading]);
  return { isAuthenticated, isLoading,loginWithRedirect,logout };
};

export default useAuth;