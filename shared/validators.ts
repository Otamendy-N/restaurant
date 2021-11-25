export type ValidatorFn<T = string> = (value: T) => ValidationResult;
export type ValidationResult = true | string;

export class Validators {
  static required (value: string): ValidationResult {
    return !!value || 'Campo requerido'
  }

  static email (value: string): ValidationResult {
    return (
      (!!value &&
        /^[_a-zA-Z0-9.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/.test(value)) ||
      'Email no valido'
    )
  }

  static nonZero (value: string | number): ValidationResult {
    return (!!value && value > 0) || 'Cantidad no válida'
  }

  static maxLength (max: number): ValidatorFn {
    return value => (!!value && value.length <= max) || 'Limite de caracteres excedido'
  }

  static minLength (min: number): ValidatorFn {
    return value => (!!value && value.length >= min) || `Se requiren al menos ${min} caracteres`
  }

  static passConfirm (password: string): ValidatorFn {
    return value => (!!value && value === password) || 'No Coinciden las contrasenhas'
  }

  static number (value: string): ValidationResult {
    return (!!value && /^[0-9]+$/.test(value)) || 'Formato incorrecto'
  }
}
