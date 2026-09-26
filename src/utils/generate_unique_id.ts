import { randomBytes } from 'crypto';

export function generateUniqueId() {
    return randomBytes(16).toString('base64url')
}