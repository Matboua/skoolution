import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { Types } from 'mongoose';

export function IsMongoId(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isMongoId',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, _args: ValidationArguments) {
                    return Types.ObjectId.isValid(value);
                },
                defaultMessage(_args: ValidationArguments) {
                    return 'Invalid MongoDB ObjectId';
                },
            },
        });
    };
}
