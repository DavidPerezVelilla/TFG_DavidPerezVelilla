import { Auth, createUserWithEmailAndPassword,
  GoogleAuthProvider, signInWithEmailAndPassword,
  signInWithPopup, signOut } from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from './login-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  async login({ email, password }: LoginData) {
    try{
      return await signInWithEmailAndPassword(this.auth, email, password);
    }
    catch{
      alert("No se ha podido hacer el log-in correctamente. Usuario no valido");
      return null;
    }
  }

  async loginWithGoogle() {
    try{
      return await signInWithPopup(this.auth, new GoogleAuthProvider());
    }
    catch{
      alert("No se ha podido hacer el log-in correctamente. Usuario no valido");
      return null;
    }
  }


  async register({ email, password }: LoginData) {
    try{
      return await createUserWithEmailAndPassword(this.auth, email, password);
    }
    catch{
      alert("No se ha podido hacer el registro correctamente. Minimo 6 caracteres como contraseña");
      return null;
    }
  }

  getAuth() {
    return this.auth;
  }

  logout() {
    return signOut(this.auth);
  }

}
