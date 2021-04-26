import {RegistrationFormValues, LoginFormValues, SignUpStore, SignInStore} from "./types";

export const registrationInitialValues: RegistrationFormValues = {
    email: '',
    name: '',
    phone: '',
    password: '',
    password_confirmation: '',
};

export const productInitialValues: any = {
    name: '',
    description: '',
    image: '',
    price_per_hour: 0,
    min_hire_hour: 0,
    max_hire_hour: 0,
};

export const loginInitialValues: LoginFormValues = {
    email: '',
    password: '',
}

export const SignUpInitStore: SignUpStore = {
    loading: false,
    errors: [],
    isSuccess: false,
};

export const SignInInitStore: SignInStore = {
    loading: false,
    errors: [],
    isSuccess: false,
    isAuth: false
};

export const LogoutInitStore: SignInStore = {
    loading: false,
    errors: [],
    isSuccess: false,
    isAuth: true
};