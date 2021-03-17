import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UserHome() {
    const onChangeImg = async (e) => {
        const img = e.target.files[0];
        beforeUpload(img);
        const base64 = await getBase64(img);
        axios
            .put(
                // `http://localhost:4000/api/usuarios/${_id}`,
                { img: base64 },
                {
                    // headers: { 'x-auth-token': token },
                }
            )
            .then((response) => console.log(response.data));
    };
    function getBase64(img) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result));
            reader.readAsDataURL(img);
        });
    }
    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            alert('Solamente archivos JPG/PNG!');
        }
        const isLt2M = file.size / 1024 / 1024 < 3;
        if (!isLt2M) {
            alert('La imagen debe ser menor a 3MB!');
        }
        return isJpgOrPng && isLt2M;
    }

    return (
        <div className="text-center bg-white p-2 my-5">
            <div className="d-flex justify-content-center align-items-end ml-4 m-2">
                <img
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
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
                <input id="file-input" className="d-none" type="file" onChange={onChangeImg} />
            </div>
        </div>
    );
}
