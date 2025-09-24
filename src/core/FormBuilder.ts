import { FormField } from '../types/FormTypes';
import config from '../data/form-config.json';

export class FormBuilder {
  static render(): void {
    (config.fields as FormField[]).forEach(field => {
      console.log(`Rendering field: ${field.name} (${field.type})`);
    });
  }
}
