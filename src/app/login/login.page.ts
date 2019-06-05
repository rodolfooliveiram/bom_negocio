import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoGuard } from '../guards/autenticacao.guard';
import { UsuarioService } from '../services/usuario.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  msg = "";
  formulario: FormGroup;

  constructor(private formBuilder:FormBuilder, private router:Router, private usuario:UsuarioService) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ["rodolfoalvesmdo@gmail.com", [Validators.required, Validators.email]],
      senha: ["123456", [Validators.required, Validators.minLength(6)]]
    });
  }

  async efetuarLogin() {

    firebase.auth().signInWithEmailAndPassword(this.formulario.get('email').value, this.formulario.get('senha').value)
    .then(usuarioLogado => {
      
       AutenticacaoGuard.podeAcessar = true;
        this.router.navigateByUrl('/home');

    })
    .catch(erro => {
      this.msg = "E-mail ou Senha Invalidos!";
    });
  

    // let logou = await this.usuario.logar(this.formulario.get('email').value, this.formulario.get('senha').value);
    // if(logou) {
    //   AutenticacaoGuard.podeAcessar = true;
    //   this.router.navigateByUrl('home');
    // } else {
    //   this.msg = "Login ou senha incorreto!";
    //   alert("Login ou senha incorreto!");
    // }
}

  

}
