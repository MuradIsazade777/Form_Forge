import { Validator } from '../src/core/Validator';
import { FormField } from '../src/types/FormTypes';

const field: FormField = { name: 'age', type: 'number', required: true, min: 18 };

console.log('✅ Test: Valid age (25)', Validator.validate(field, 25)); // true
console.log('❌ Test: Invalid age (15)', Validator.validate(field, 15)); // false
console.log('❌ Test: Missing value', Validator.validate(field, null)); // false
