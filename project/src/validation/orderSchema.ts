import * as yup from 'yup';

export const orderSchema = yup.object({
    name: yup.string().required('Не указано имя'),
    email: yup.string().email('Некорректный формат электронной почты').required('Не указана электронная почта'),
    phone: yup.string().trim().matches(/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/, 'Некорректный номер телефона').required('Не указан телефон'),
    address: yup.string().default('').required('Не указан адрес'),
    deliveryType: yup.string().required('Не выбран тип доставки'),
    paymentType: yup.string().required('Не указан способ оплаты'),
    comment: yup.string(),
    agreement: yup.boolean().oneOf([true], 'Необходимо согласие')
}).required();