import { createContext, useContext, useEffect } from "react";





const AuthContext = createContext({});
export function AuthProvider({ children }) {


   


      

    

    

  const user = null;
  return (
    <AuthContext.Provider value={{ 
      
        
     }}>{children}</AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
