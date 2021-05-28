import React, {useState, useEffect, useCallback} from 'react';
import { useForm, Controller } from 'react-hook-form'
import { URL } from '../constants';

const UpdateUserData = props => {
    const [userData, setUserData] = useState(null);
    const { handleSubmit, control, setValue} = useForm({mode: 'onBlur'});
    const fetchUserData = useCallback(async account => {
        const userData = await fetch(`${URL}/user/${account}`)
                            .then(res=> res.json());
        console.log(userData);
        setUserData(userData);
    }, []);

    useEffect(() => {
        const account = localStorage.getItem('account');
        fetchUserData(account);
    }, [fetchUserData])

    const onSubmit = async (data) => {
        // TODO
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>User Name:</label>
                    <Controller
                        as={<input type='text' />}
                        control={control}
                        defaultValue={userData ? userData.name : ''}
                        name='name'
                    />
                </div>
                
                <div>
                    <label>Phone:</label>
                    <Controller
                        as={<input type='text' />}
                        control={control}
                        defaultValue={userData ? userData.phone : ''}
                        name='phone'
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default UpdateUserData;