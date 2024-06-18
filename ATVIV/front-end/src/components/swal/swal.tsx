import Swal, { SweetAlertOptions } from "sweetalert2";
import './swal.css';


export const erro = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Error!",
        text: message,
        icon: 'error',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 2000,
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const success = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Sucesso!",
        text: message,
        icon: 'success',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 2000,
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const warning = (message: string) => {
    const options: SweetAlertOptions = {
        title: "Aviso!",
        text: message,
        icon: 'warning',
        confirmButtonText: 'OK',
        backdrop: 'rgba(0,0,0,0.7)',
        timer: 2000, // 3 segundos
        timerProgressBar: true,
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
            popup: 'my-popup-class',
            title: 'my-title-class',
            confirmButton: 'my-confirm-button-class',
            timerProgressBar: 'my-progress-bar-class'
        }
    };
    Swal.fire(options);
};

export const options = (message: string) => {
    return Swal.fire({
        title: message,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Sim",
        denyButtonText: "Não"
    });
}