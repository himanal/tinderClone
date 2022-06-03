import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";
import useAuth from "../hooks/useAuth";
// import { auth } from "../firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function LoginScreen() {
  const {  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async() => {
    
    try {
      const auth =getAuth()

      const userCredential=await createUserWithEmailAndPassword(auth,email,password)
      const user = userCredential.user

     
    } catch (error) {
      console.log(error)
    }
  };
  // const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in 
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // ..
  //   }); 
  const tw = useTailwind();
  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={tw("flex items-start justify-center h-full bg-green-100 ")}>
        <TextInput
          style={tw(
            "w-[80%] h-8 bg-blue-300 rounded-md mx-auto my-2 p-2 flex content-center"
          )}
          value={email}
          placeholder="Email"
          onChangeText={text => setEmail(text)} />
        <TextInput
          style={tw(
            "w-[80%] h-8 bg-blue-300 rounded-md mx-auto  p-2 flex content-center"
          )}
          value={password}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)} />
        <View style={tw("mx-auto mt-2")}>
         
          <TouchableOpacity
            onPress={() => {
            
            } }
          >
            <Text style={tw("text-blue-500 mt-2   mx-auto")}>login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{}}
          >
            <Text style={tw("text-blue-500 mt-2   mx-auto")}>register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default LoginScreen;
