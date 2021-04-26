import {User} from "../../../libs/utils/store/types";
import { 
    changePasswordValues,
    CreateFormValues,
    GetAllUsersInStore,
    ProductFormValues
} from "./types";

export const UserInitialValues: User = {
    id: '',
    email: '',
    phone: '',
    contact_face:'',
    name: '',
    location: '',
    role: '',
};
export const AllUsersInitialValues: GetAllUsersInStore = {
    allUsers:[],
};

export const initialPostValues: ProductFormValues = {
    name:'',
    description:'',
    price_per_hour:0,
    image:'',
    type:'',
    min_hire_hours:1,
    max_hire_hours:2
}

export const changePasswordInitialValues: changePasswordValues = {

    old_password: '',
    password: '',
    password_confirmation: '',
    
  }
