import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { beforeUpload, getBase64 } from '../utils';
import FormUser from './FormUser';

const exampleImage = 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'

export default function User({ token, user }) {
    const [image, setImage] = useState(exampleImage);
    
    const onChangeImg = async (e) => {
        const img = e.target.files[0];
        if (!beforeUpload(img)) return;
        const base64 = await getBase64(img);
        setImage(base64);
    //     axios
    //         .put(
    //             `http://localhost:4000/api/usuarios/usuarioLogueado`,
    //             { img: base64 },
    //             {
    //                 headers: { 'x-auth-token': token },
    //             }
    //         )
    //         .then((response) => console.log(response.data));
    };

    return (
        <div className="text-center bg-white p-2 my-5">
            <div className="d-flex justify-content-center align-items-end ml-4 m-2">
                <img
                    src={image}
                    alt="profile"
                    width="200"
                    className="rounded-circle"
                    style={{ border: '2px solid #18809a' }}
                />
                <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
                    <img
                        src="https://icongr.am/feather/camera.svg?size=128&color=293f8e"
                        alt="camera edit"
                        width="20"
                    />
                </label>
                <input id="file-input" className="d-none" accept="image/png, image/jpeg" type="file" onChange={onChangeImg} />
            </div>
            <p>Nombre: {user.nombre}</p>
            <FormUser token={token} />
        </div>
    );
}
