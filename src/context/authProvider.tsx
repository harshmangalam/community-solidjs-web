import { fetchCurrentUser } from "@/services";
import { Component, createContext, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import cookie from "js-cookie";
const StateContext = createContext();
const DispatchContext = createContext();

const AuthProvider: Component = (props) => {
  const [store, setStore] = createStore({
    isAuthenticated: false,
    currentUser: {},
    isLoading: true,
  });

  onMount(() => {
    const token = cookie.get("token");
    if (!token) {
      setStore("isLoading",false)
      return;
    }
    handleFetchCurrentUser();
  });

  async function handleFetchCurrentUser() {
    try {
      setStore("isLoading", true);
      const res = await fetchCurrentUser();
      setStore("isAuthenticated", true);
      setStore("currentUser", res.data.user);
    } catch (error) {
      console.log(error);
      console.log(error);
      cookie.remove("token");
    } finally {
      setStore("isLoading", false);
    }
  }

  function authenticate(user) {
    setStore("isAuthenticated", true);
    setStore("currentUser", user);
  }

  function logout() {
    setStore("isAuthenticated", false);
    setStore("currentUser", {});
  }

  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider
        value={{ authenticate, logout, handleFetchCurrentUser }}
      >
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default AuthProvider;

export const useAuthState = () => useContext(StateContext);
export const useAuthDispatch = () => useContext(DispatchContext);
