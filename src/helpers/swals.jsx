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
      didOpen: () => {
        Swal.showLoading();
      },
    }).then((result) => { });
  };