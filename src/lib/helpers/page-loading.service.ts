import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class PageLoadingService {

  constructor(
  ) { }

  openLoading() {
    Swal.fire({
      html: '<div class="blocking"></div>',
      showCloseButton: false,
      showCancelButton: false,
      showConfirmButton: false,
      background: 'none',
      grow: 'fullscreen'
    });
  }

  closeLoading() {
    Swal.close();
  }
}

