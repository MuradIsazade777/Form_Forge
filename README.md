# 🧩 FormForge

**FormForge** is a lightweight, TypeScript-based form engine that dynamically renders and validates forms using JSON configuration. Built for clarity, modularity, and developer control, FormForge is ideal for CLI-driven form logic, backend validation, or integration into larger TypeScript ecosystems.
---

## 🚀 Features

- ⚙️ JSON-driven form structure
- ✅ Field-level validation with custom rules
- 📦 Clean TypeScript architecture (no UI dependencies)
- 🧪 Simple test suite for validation logic
- 📁 Modular folder structure for scalability
---

## 🧪 Run & Test
bash
npm run start   # Executes src/index.ts
npm run test    # Runs validation tests
---

## 📄 JSON Configuration

Define your form fields in `src/data/form-config.json`.

Example configuration:

```json
{
  "fields": [
    { "name": "email", "type": "email", "required": true },
    { "name": "age", "type": "number", "min": 18 }
  ]
}
```

## 🔧 Use Case
1. FormForge is ideal for:

2. Backend form validation

3. CLI-based form rendering

4. Static form generation pipelines

🟢TypeScript-first projects requiring structured input logic
---

## 📦 Installation

```bash
npm install
```
📣 Author
Built by Murad — full-stack architect with a passion for clean code, branded structure, and cyber-inspired development.
