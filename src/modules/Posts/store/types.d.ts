export interface Products {
    list: any[]
}

export interface GetProductsInStore {
    list: any[];
}

export interface UpdatePostValues {
    header?:string,
    description?:string,
    user_id?:string,
    image?:any,
    place?:string,
    phone?:string,
    email?:string,
    contact_face?:string,
}

export interface SelectedProduct {
    post: any;
}



export interface SelectedProductInStore {
    post: any;
}
