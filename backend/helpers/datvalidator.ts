import { registerDecorator, ValidationOptions } from "class-validator";

export function IsnotBeforThisYear(ValidationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isNotBeforeThisYear',
            target: object.constructor,
            propertyName,
            options: ValidationOptions,
            validator: {
                validate(value: any) {
                    const currentYear = new Date().getFullYear();
                    if (typeof value !== 'number') {
                        return false; // Ensure the value is a number
                    }
                    return value >= currentYear; // Check if the value is not before the current year
                },
                defaultMessage(args: any) {
                    return `${args.property} must not be before the current year`;
                }
            }
        })
    }
}

export function IsAfterOneYear(ValidationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isNotBeforeThisYear',
            target: object.constructor,
            propertyName,
            options: ValidationOptions,
            validator: {
                validate(value: any) {
                    const currentYear = new Date().getFullYear();
                    if (typeof value !== 'number') {
                        return false; // Ensure the value is a number
                    }
                    return value >= currentYear; // Check if the value is not before the current year
                },
                defaultMessage(args: any) {
                    return `${args.property} must not be before the current year`;
                }
            }
        })
    }
}