import { useCallback, useEffect, useState } from 'react';

export const useValidation = (options: any) => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const values: any = {};
        for (const field in options.fields) {
            values[field] = options.fields[field].initialValue || '';
        }
        setData(values);
    }, [options.fields]);

    const [errors, setErrors] = useState<any>({});

    const handleChange = (field: any) => {
        return (value: any) => {
            setData((prevValue: any) => {
                return {
                    ...prevValue,
                    [field]: value,
                };
            });
        };
    };

    const handleSubmit = useCallback(() => {
        setErrors({});

        let hasError = false;

        for (const field in options.fields) {
            const validations = options.fields[field]?.validations;

            if (!validations) {
                continue;
            }

            const value = data[field];
            const required = validations?.required;
            const pattern = validations?.pattern;
            const custom = validations?.custom;

            if (required && !value) {
                hasError = true;
                setErrors((prevState: any) => {
                    return { ...prevState, [field]: required.message };
                });
                continue;
            }

            if (pattern && !RegExp(pattern.value).test(value)) {
                hasError = true;
                setErrors((prevState: any) => {
                    return { ...prevState, [field]: pattern.message };
                });
                continue;
            }

            if (custom && custom.isValid(value)) {
                hasError = true;
                setErrors((prevState: any) => {
                    return { ...prevState, [field]: custom.message };
                });
            }
        }

        if (!hasError && options?.onSubmit) {
            options.onSubmit(data);
        }
    }, [data, options]);

    const getInputProps = (field: any) => {
        return {
            name: field,
            type: options.fields[field].type || 'text',
            onChange: handleChange(field),
            placeholder: options.fields[field].placeholder || '',
            value: data[field],
            isError: errors[field],
            errorText: errors[field],
        };
    };

    return {
        handleSubmit,
        getInputProps,
    };
};
