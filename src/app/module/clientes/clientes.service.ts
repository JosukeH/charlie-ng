import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  Auth_Server: string = 'http://localhost:3000'
  authSubject = new BehaviorSubject(false);
  private token:string = '';

  constructor( private httpClient: HttpClient) { }
  getUsers() : any {
    return this.httpClient.get(`${this.Auth_Server}/api/user`) 
  }

  updateUser(updateUser: any){
    return this.httpClient.put(`${this.Auth_Server}/api/users`, updateUser) 
  }

  // login(user: any) : any{
  //   return this.httpClient.post(`${this.Auth_Server}/api/users/login`, user) 
  // }

  register(user: any) : any{
    return this.httpClient.post(`${this.Auth_Server}/api/users`, user) 
  }


  // logout(): void{
  //   this.token = ''
  //   localStorage.removeItem('ACCESS_TOKEN');
  //   localStorage.removeItem('EXPIRES_IN');
  // }

  //  saveUser(user: any): void{
  //     localStorage.setItem('user', JSON.stringify(user));
  // }
}
 // how fetch
 //  getUsers(){
//   this.clientesService.getUsers().subscribe((data: any) => {
//     console.log(data);
//     this.clientes = data
//   },
//   (error : any) => console.log(error)
//   )
// }