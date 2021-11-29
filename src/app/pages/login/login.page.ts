import { Component, OnInit, ViewChild } from '@angular/core';
import { UserCredential } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthFormComponent } from 'src/app/components/auth-form/auth-form.component';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  @ViewChild(AuthFormComponent) loginForm: AuthFormComponent;
  constructor(private authService: AuthService, private router: Router, public alertController: AlertController) { }

  ngOnInit() { }

  async loginUser(credentials: UserCredential): Promise<void> {
    try {
      const userCredential: firebase.auth.UserCredential = await this.authService.login(
        credentials.email,
        credentials.password
      );
      const alert = await this.alertController.create({
      header: 'Bienvenido: '+ credentials.email,
      message: ' Te damos la bienvenida a nuestra aplicación ',
      buttons: ['Aceptar']});
      await alert.present();
      console.log('El usuario ha sido ingresado con éxito');
      this.authService.userId = userCredential.user.uid;
      await this.loginForm.hideLoading();
      this.router.navigateByUrl('index');
    } catch (error) {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos. Por favor inténtelo de nuevo',
        buttons: ['Aceptar']
      });
      await alert.present();
      console.log('El usuario no ha ingresado a nuestra página');
      await this.loginForm.hideLoading();
      this.loginForm.handleError(error);
    }
  }
}
