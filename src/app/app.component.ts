import { Component } from '@angular/core';
// carga de push
import { PushService } from './services/push.service';
import { Platform } from '@ionic/angular';
// crud
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private Platform: Platform,
    // cargar 
    private PushService:PushService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }
  componentes: Componente[] = [
    
    {
      icon: 'shield-checkmark',
      name: 'Medidas sanitarias contra el covid',
      redirecTo: '/medidas'
    },
    {
      icon: 'newspaper',
      name: 'Noticias de impacto ambiental',
      redirecTo: '/news'
    },
    {
      icon: 'heart',
      name: 'Conócenos',
      redirecTo: '/conocenos'
    },
    {
      icon: 'people-circle',
      name: 'Comentarios',
      redirecTo: '/comentarios'
    },
    {
      icon: 'clipboard',
      name: 'Noticias Mundiales',
      redirecTo: '/noticias'
    },
  ];


  initializeApp(){
  this.Platform.ready().then(()=>{
    //push
  this.PushService.configuracionInicial();
  // crud
  this.statusBar.styleDefault();
  this.splashScreen.hide();

  });
   
  }
}
