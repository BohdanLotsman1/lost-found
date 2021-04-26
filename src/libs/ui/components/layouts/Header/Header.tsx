import React from "react";
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../../../modules/Auth/store/actions/logoutActions";
import {getUserSelector} from "../../../../../modules/User/store/selectors";
import './style.scss';

const Header = () => {

    const dispatch = useDispatch();

    const user = useSelector(getUserSelector);

    const logoutHandle = () => {
        dispatch(logoutUser());
    }

    return (
        <div className="header main">
            <div>
                <Link to={"/"} className="link">
                   Lost&Found
                </Link>
            </div>
            <div className="main">
                {!user.id &&
                    <div className='reight'>
                        <Link to={"/registration"} className="link">
                            SignUp
                        </Link>
                        <Link to={"/login"} className="link">
                            SignIn
                        </Link>
                    </div>
                }
                {user.id &&
                    <div className='left'>
                        <Link to={"/profile"} className="link">
                            My profile
                        </Link>
                        <Link to={"#"} onClick={logoutHandle} className="link">
                            LogOut
                        </Link>
                    </div>

                }
                
            </div>
        </div>
    );
  }
export default Header;