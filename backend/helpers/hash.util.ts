import * as bcrypt from 'bcrypt';

export class HashUtil {
    static async hashPassword(password: string): Promise<string> {
        const saltRounds = 5;
        return bcrypt.hash(password, saltRounds);
    }

    static async comparePasswords(plainText: string, hash: string): Promise<boolean> {
        return bcrypt.compare(plainText, hash);
    }
}
