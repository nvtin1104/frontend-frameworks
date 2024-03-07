import React, { useContext } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { GlobalContext } from '../context';
const inforSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng nhập họ tên'),
    email: Yup.string().required('Vui lòng nhập email').email('Email không hợp lệ'),
    phone: Yup.string().required('Vui lòng nhập số điện thoại').matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại không hợp lệ'),
    address: Yup.string().required('Vui lòng nhập địa chỉ'),
    age: Yup.number().required('Vui lòng nhập tuổi!').min(2, 'Tuổi tối thiểu là 2!')
})
const Edit = () => {
    const { globalState, setGlobalState } = useContext(GlobalContext);
    const formik = useFormik({
        initialValues: {
            name: globalState.name,
            age: globalState.age,
            email: globalState.email,
            phone: globalState.phone,
            address: globalState.address,
            status: globalState.status
        },
        validationSchema: inforSchema,
        onSubmit: (values) => {
            setGlobalState({ ...values });
            alert('Cập nhật thông tin thành công');
        }
    });
    return (
        <div className='container' style={{
            "padding": "20px 0",
        }}>
            <h1>Chỉnh sửa thông tin</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Họ tên:</label>
                    <input
                        type="text"
                        name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="form-control"
                        id="name" />
                    {formik.errors.name && formik.touched.name && <div className="text-danger">{formik.errors.name}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email:</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.email} type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {formik.errors.email && formik.touched.email && (
                        <p style={{ color: 'red' }}>{formik.errors.email}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Tuổi:</label>
                    <input onChange={formik.handleChange}
                        value={formik.values.age} type="text" name="age" className="form-control" id="age" />
                    {formik.errors.age && formik.touched.age && (
                        <p style={{ color: 'red' }}>{formik.errors.age}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Số điện thoại:</label>
                    <input type="text" onChange={formik.handleChange}
                        value={formik.values.phone} name='phone' className="form-control" id="phone" />
                    {formik.errors.phone && formik.touched.phone && (
                        <p style={{ color: 'red' }}>{formik.errors.phone}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Địa chỉ:</label>
                    <input type="text" onChange={formik.handleChange}
                        value={formik.values.address} name='address' className="form-control" id="address" />
                    {formik.errors.address && formik.touched.address && (
                        <p style={{ color: 'red' }}>{formik.errors.address}</p>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">Lưu</button>
            </form>
        </div>
    )
}

export default Edit