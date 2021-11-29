import {browser, element, by } from 'protractor';
 
describe('Pruebas AppCovid', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/");
    });

    //Creación de prueba 1
    it("Mi página registro se muestra correctamente", ()=>{
        expect(element(by.css(".label ion-label")).getText()).toContain("Nombre: ");
    });  //esta es la que funciona  

    //Creación de prueba 2
    it("Mi página registro muestra el título correctamente con esta otra prueba", ()=>{
        expect(element(by.css(".titulo ion-title")).getText()).toContain("Sección Comentarios");
    }); //Esta al final era 

});
 















