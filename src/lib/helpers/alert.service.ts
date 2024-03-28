import { Injectable } from '@angular/core';
declare var Swal: any;

export interface AlertOptions {
  title?: string;
  titleText?: string;
  text?: string;
  html?: string;
  footer?: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'question';
  backdrop?: boolean | string;
  toast?: boolean;
  target?: string;
  input?:
  'text' | 'email' | 'password' | 'number' | 'tel' | 'range' | 'textarea' | 'select' | 'radio' | 'checkbox' |
  'file' | 'url';
  width?: number | string;
  padding?: number;
  background?: string;
  position?:
  'top' | 'top-start' | 'top-end' | 'top-left' | 'top-right' |
  'center' | 'center-start' | 'center-end' | 'center-left' | 'center-right' |
  'bottom' | 'bottom-start' | 'bottom-end' | 'bottom-left' | 'bottom-right';
  grow?: 'row' | 'column' | 'fullscreen' | false;
  customClass?: string;
  timer?: number;
  animation?: boolean;
  heightAuto?: boolean;
  allowOutsideClick?: boolean;
  allowEscapeKey?: boolean;
  allowEnterKey?: boolean;
  stopKeydownPropagation?: boolean;
  keydownListenerCapture?: boolean;
  showConfirmButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonColor?: string;
  cancelButtonColor?: string;
  confirmButtonAriaLabel?: string;
  cancelButtonAriaLabel?: string;
  buttonsStyling?: boolean;
  reverseButtons?: boolean;
  focusConfirm?: boolean;
  focusCancel?: boolean;
  showCloseButton?: boolean;
  closeButtonAriaLabel?: string;
  showLoaderOnConfirm?: boolean;
  preConfirm?: (inputValue: any) => any | void;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
  inputPlaceholder?: string;
  inputValue?: string;
  inputOptions?: Map<string, string> | { [inputValue: string]: string };
  inputAutoTrim?: boolean;
  inputAttributes?: any;
  inputValidator?: any;
  progressSteps?: string[];
  currentProgressStep?: string;
  progressStepsDistance?: string;
  willOpen?: (modalElement: HTMLElement) => void;
  didClose?: () => void;
  didOpen?: (modalElement: HTMLElement) => void;
  willClose?: (modalElement: HTMLElement) => void;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(text: string): Promise<any> {
    return this.notify({
      type: 'success',
      html: text
    });
  }

  error(text: string): Promise<any> {
    return this.notify({
      type: 'error',
      html: text
    });
  }

  warning(text: string): Promise<any> {
    return this.notify({
      type: 'warning',
      html: text
    });
  }

  info(text: string): Promise<any> {
    return this.notify({
      type: 'info',
      html: text
    });
  }

  question(text: string, confirmText?: string, cancelText?: string): Promise<any> {
    return this.notify({
      type: 'question',
      showConfirmButton: true,
      confirmButtonText: confirmText || 'Confirm',
      cancelButtonText: cancelText || 'Cancel',
      showCancelButton: true,
      reverseButtons: true,
      allowEscapeKey: false,
      html: text
    });
  }


  notify(options: AlertOptions): Promise<any> {
    return Swal.fire({
      customClass: {
        confirmButton: 'btn btn-success mr-2 ml-2',
        cancelButton: 'btn btn-secondary mr-2 ml-2'
      },
      buttonsStyling: false,
      allowOutsideClick: false,
      ...options
    });
  }
}
