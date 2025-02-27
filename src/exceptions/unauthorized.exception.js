// src/domain/exceptions/unauthorized.exception.ts

export class UnauthorizedException extends Error {
    constructor(message) {
        super(`Unauthorized: ${message}`);
        this.name = 'UnauthorizedException';
    }
}
