import { FormField } from '../types/FormTypes';

export class Validator {
  static validate(field: FormField, value: any): boolean {
    if (field.required && !value) return false;
    if (field.type === 'number' && field.min !== undefined && value < field.min) return false;
    return true;
  }
}
