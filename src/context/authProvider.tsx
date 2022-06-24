import { fetchCurrentUser } from "@/services";
import { Component, createContext, onMount } from "solid-js";
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

  onMount(async () => {
    const token = cookie.get("token");
    try {
      if (!token) {
        return;
      }
      const res = await fetchCurrentUser();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setStore("isLoading", false);
    }
  });
  return (
    <StateContext.Provider value={store}>
      <DispatchContext.Provider value={{}}>
        {props.children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default AuthProvider;
