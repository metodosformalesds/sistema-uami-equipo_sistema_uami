Limport { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class BDService {
  ROL:string;
  ListadoMedicamentos=[ ]; ListadoPacientes=[ ]; ListadoConsultas=[ ];
  aux; enfermedades=[ ];
  constructor() { }

  loginUser(value){
    return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function(){
      return new Promise<any>((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
        })
    })
    
   }
  
   logoutUser(){
     return new Promise((resolve, reject) => {
       if(firebase.auth().currentUser){
         firebase.auth().signOut()
         .then(() => {
           console.log("LOG Out");
           resolve();
         }).catch((error) => {
           reject();
         });
       }
     })
   }
  
   userDetails(){
     return firebase.auth().currentUser.uid;
   }
   rol(){
     firebase.database().ref(this.userDetails()).child("ROL").once('value',a=>this.rol1(a.val()))
   }
   rol1(a:any){
    this.ROL=a
    console.log(a)
   }

   guardarMedicamento(nombre,cantidad,observaciones){
     firebase.database().ref().child('Medicamento').child(nombre).update({Nombre:nombre,Cantidad:cantidad,Observaciones:observaciones})
   }
   lessMedicamento(nombre,cantidad){
     firebase.database().ref().child('Medicamento').child(nombre).update({Cantidad:cantidad})
   }
   guardarPaciente(matricula,carrera,edad,sexo){
     firebase.database().ref().child('Paciente').child(matricula).update({Matricula:matricula,Carrera:carrera,Edad:edad,Sexo:sexo})
   }
   crearUsuario(nickname,contrasena,email,rol){
     firebase.auth().createUserWithEmailAndPassword(email,contrasena).then(a=>this.guardarROL(a.user.uid,nickname,rol))
   }
   guardarROL(uid,nickname,rol){
     firebase.database().ref().child(uid).update({Nickname:nickname,ROL:rol})
   }
   guardarConsulta(id,codigo,matricula,Medicamento,fecha){
    firebase.database().ref().child('Consulta').child(id).update({ID:id,CodigoEnfermedad:codigo,Matricula:matricula,Medicamento:Medicamento,Fecha:fecha})
  }
   listadoMedicamento(){
     firebase.database().ref().child('Medicamento').once('value',ss=>{
       ss.forEach(element => {
         this.ListadoMedicamentos.push(element.val())
       });
     })
   }
   listadoPaciente(){
     firebase.database().ref().child('Paciente').once('value',ss=>{
       ss.forEach(element=>{
         this.ListadoPacientes.push(element.val())
       })
     })
   }
   listadoConsulta(){
     firebase.database().ref().child('Consulta').once('value',ss=>{
       ss.forEach(element=>{
         this.ListadoConsultas.push(element.val())
       })
     })
   }

  restarMedicamento(medicamento){
    this.ListadoMedicamentos.forEach(ss=>{
         if(ss.Nombre==medicamento){
          this.aux= parseInt(ss.Cantidad)
          this.aux--
          this.lessMedicamento(medicamento,this.aux)
       }
     })
   }

   listadoEnfermedades(){
    return firebase.database().ref().child('Consulta')
   }


}
