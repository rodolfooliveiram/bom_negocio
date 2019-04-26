import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private usuario:UsuarioService, private router:Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nome: ["Rodolfo", [Validators.required]],
      email: ["rodolfoalvesmdo@gmail.com", [Validators.required, Validators.email]],
      senha: ["123456", [Validators.required, Validators.minLength(6)]]
    });
  }

  efetuarCadastro() {
    this.usuario.cadastrar(this.formulario.get('nome').value, this.formulario.get('email').value, this.formulario.get('senha').value).then(() => {}).catch(() => {
      alert('Erro ao cadastrar usuário.');
    });
    this.router.navigateByUrl('login');
  }

}
