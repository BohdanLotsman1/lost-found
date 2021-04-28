import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import 'antd/dist/antd.css';
import {JWT_LOCALSTORAGE_KEY} from "../../../libs/utils/constants";
import './style.scss';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { createPostInitialValues } from "../../Posts/store/initialState";
import { getUserSelector } from "../../User/store/selectors";
import { createPost } from "../../Posts/store/actions";
import { phoneRegExp } from "../../../utils/validations";

const required = 'This field is required'

const PostValidationSchema = () => {
    return Yup.object({
      header: Yup.string().required(required).label('Header'),
      description: Yup.string().max(500).required(required).label('Description'),
      place: Yup.string().required(required).label('City'),
      contact_face: Yup.string().required(required).label('Contact face'),
      phone: Yup.string().required(required).label('Phone').matches(phoneRegExp,"invalid phone number"),

    });
}

const AdvertisementPage = () => {

    const dispatch = useDispatch()

    let token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);

    const user = useSelector(getUserSelector)

    useEffect(() => {
        if(!token) token = localStorage.getItem(JWT_LOCALSTORAGE_KEY);
    }, [token]);

    const submitHandle = (values:any) =>{
        values.email = user.email;
        values.user_id = user.id;

        dispatch(createPost(values))
        window.location.href='/'
    }

    return ( 
        <div className="ad-page">
            <div className="create">Ceate advertisement</div>

            <Formik
                initialValues={createPostInitialValues}
                validationSchema={PostValidationSchema}
                onSubmit={submitHandle}>{(formProps) => (
                    <Form className="form">
                        <div className="block">
                            <div className="headerProd">
                                <span>Header:</span>
                                <Field
                                    name="header"
                                    placeholder="Example: I lost/find passport"
                                    type="text"
                                />
                                <ErrorMessage name="header" component="div" className="error-message"/>
                            </div>

                            <div className="description">
                                <span>Description:</span>
                                <Field
                                    className="descInput"
                                    name="description"
                                    as="textarea"
                                    placeholder="Description of lost/found subject"
                                />
                                <ErrorMessage name="description" component="div" className="error-message"/>
                            </div>

                            <div className="headerProd">
                                <span>Image:</span>
                                <input
                                    name="image"
                                    placeholder="Image"
                                    className="image"
                                    type="file"
                                    accept="image/*"
                                    onChange={(event:any)=>{
                                        formProps.setFieldValue('image',event.target.files[0])
                                    }}
                                />
                                <ErrorMessage name="description" component="div" className="error-message"/>
                            </div>
                        </div>
                        <div className="block">
                            <h3>Contact information</h3>
                            <div className="headerProd">
                                <span>City:</span>
                                <Field
                                    name="place"
                                    placeholder="City"
                                    type="text"
                                />
                                <ErrorMessage name="place" component="div" className="error-message"/>
                            </div>
                            <div className="headerProd">
                                <span>Contact face:</span>
                                <Field
                                    name="contact_face"
                                    defaultValue={user.contact_face}
                                    placeholder={user.contact_face}
                                    type="text"
                                />
                                <ErrorMessage name="contact_face" component="div" className="error-message"/>
                            </div>
                            <div className="headerProd">
                                <span>Email:</span>
                                <Field
                                    name="email"
                                    disabled
                                    value={user.email}
                                    type="text"
                                />
                                <ErrorMessage name="email" component="div" className="error-message"/>
                            </div>
                            <div className="headerProd">
                                <span>Phone number:</span>
                                <Field
                                    name="phone"
                                    placeholder='Phone'
                                    type="text"
                                />
                                <ErrorMessage name="phone" component="div" className="error-message"/>
                            </div>
                        </div>
                        <div className="submitBtn">
                            <button type="submit" className="submit">
                                <span>Create</span>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AdvertisementPage;