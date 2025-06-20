import { create } from "zustand";

const useAuthStore = create((set) => ({
    //intial login state
    isLogin : false,


    //on user login
    onLogin :() =>{
      set({isLogin : true});

    },

    //on user logout
    onLogout:() => {
        set({isLogin:false});
    }
}));

export default useAuthStore;