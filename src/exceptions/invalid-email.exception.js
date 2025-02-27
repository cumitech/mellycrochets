// src/domain/exceptions/invalid-email.exception.ts

export class InvalidEmailException extends Error {
    constructor(email) {
      super(`Invalid email: ${email}`);
      this.name = 'InvalidEmailException';
    }
  }
  