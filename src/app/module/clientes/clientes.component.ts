import { Component, OnInit } from '@angular/core';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})


export class ClientesComponent implements OnInit {
  form = {
    name :'',
    email: '',
  }

  constructor(private clientesService : ClientesService){}
  clientes: any[] = []

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.clientesService.getUsers().subscribe((data: any) => {
      console.log(data);
      
      this.clientes = data
    },
    (error : any) => console.log(error)
    )
  }
}

  // selectIngrediente(data):void {
  //   this.form = {
  //     name :data.name,
  //     email: data.email,
  //     _id: data._id
  //   }
  //   console.log(this.form);
  // }

  // handleUpdate():void{
  //   this._userService.updateUser(this.form).subscribe(data => {
  //     console.log(data);
  //     this.obtenerProductos()

  //   }, 
  //   error => {
  //     console.log(error);
      
  //   })
  // }  

