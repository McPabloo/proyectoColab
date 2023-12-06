import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceColabService } from 'src/app/services/service-colab.service';

@Component({
  selector: 'app-details-colab',
  templateUrl: './details-colab.page.html',
  styleUrls: ['./details-colab.page.scss'],
})
export class DetailsColabPage implements OnInit {
  colaboradorId: any; // O el tipo que uses para los IDs
  colaboradorDetails: any; // Objeto para almacenar los detalles del colaborador

  constructor(private route: ActivatedRoute, private apiService: ServiceColabService) {}

  ngOnInit() {
    // Obtener el ID del colaborador de la URL
    this.route.paramMap.subscribe(params => {
      this.colaboradorId = params.get('id');
      console.log('ID del colaborador:', this.colaboradorId);
      // Aquí puedes utilizar 'this.colaboradorId' para realizar acciones con el ID recibido
    });

    // Llamar al servicio API para obtener los detalles del colaborador usando el ID
    this.apiService.getColaboradorDetails(this.colaboradorId).subscribe(
      (data) => {
        this.colaboradorDetails = data; // Guardar los detalles del colaborador
        // Puedes hacer cualquier otro procesamiento o visualización aquí con 'this.colaboradorDetails'
      },
      (error) => {
        console.error('Error al obtener los detalles del colaborador', error);
      }
    );
  }
}
