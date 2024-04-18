import Swal from "sweetalert2";

export const showProgress = () => {
  return Swal.fire({
    title: 'Loading...',
    backdrop: true,
    html: '', 
    width: 500,
    allowEscapeKey: false,
    allowOutsideClick: false,
    timerProgressBar: true,
    allowEnterKey: false,
    customClass: {
      container: '',
      popup: '',
      backdrop: '',
    },
    didOpen: () => {
      Swal.getPopup().style.zIndex = '9999'; // ajusta este valor según sea necesario
      Swal.getContainer().style.zIndex = '9999'; // ajusta este valor según sea necesario
      Swal.getBackground().style.zIndex = '9999'; // ajusta este valor según sea necesario
      Swal.showLoading();
    },
  }).then((result) => { });
};