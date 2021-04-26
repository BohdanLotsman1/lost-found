export interface GetUserInStore {
    id: string;
    email: string;
    phone: string;
    contact_face?:string
    name: string;
    location?: string;
    role: string;
}

export interface GetAllUsersInStore{
    allUsers:any[],
}


export interface CreateFormValues {
    name?: string;
    description?: string;
    monthly_rate?: number;
};

export interface ProductFormValues{
    id?:string,
    name:string,
    description:string,
    price_per_hour:number,
    franchise_id?:string,
    type:string,
    image:string,
    min_hire_hours:number,
    max_hire_hours:number
};

export interface changePasswordValues{
    old_password: string;
    password: string;
    password_confirmation: string;
};