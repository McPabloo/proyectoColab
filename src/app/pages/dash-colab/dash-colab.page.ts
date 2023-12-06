import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceColabService } from 'src/app/services/service-colab.service';

@Component({
  selector: 'app-dash-colab',
  templateUrl: './dash-colab.page.html',
  styleUrls: ['./dash-colab.page.scss'],
})
export class DashColabPage implements OnInit {
onClick() {
  console.log('Method not implemented.');
}

  ngOnInit() {
    this.getColaboradores(); 
    // Llama a la función para obtener colaboradores cuando la página está a punto de entrar
  }

  colaboradores: any[] = []; // Array para almacenar los colaboradores

  constructor(private http: HttpClient, private router: Router, private colaboradorService: ServiceColabService) {}

  //ionViewWillEnter() { }

  getColaboradores() {
    this.http.get<any[]>('http://localhost:9005/api/getColaboradores').subscribe(
      (data) => {
        this.colaboradores = data; // Asigna los datos de los colaboradores al array
      },
      (error) => {
        console.error('Error al obtener los colaboradores:', error);
      }
    );
  }

  editarColaborador(colaborador: any) {
    console.log('Método de editar');
  }

  eliminarColaborador(colaborador: any) {
    const colaboradorId = colaborador._id; 
    console.log(colaborador)
    this.colaboradorService.eliminarColaborador(colaboradorId).subscribe(
      (data) => {
        console.log('Colaborador eliminado correctamente:', data);
        this.getColaboradores();
      },
      (error) => {
        console.error('Error al eliminar el colaborador:', error);
      }
    );
  }

  verDetalles(colaborador: any) {
    const colaboradorId = colaborador._id; 
    console.log(colaborador)
    // Navegar a la página de detalles y pasar el ID como parámetro
    this.router.navigate(['/detailsColab', colaboradorId]);
  }

}
