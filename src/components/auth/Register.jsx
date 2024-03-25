import { useInput } from '../../hooks/useInput'


const Register = () => {

    const { inputs: { name, email, password }, handleInput,onSubmit } = useInput({
        name: "",
        email: "",
        password: "",
    },
    async (e,inputs) => {

    }
    )
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 shadow border mt-4">
                    <form onSubmit={(e) => onSubmit(e,{email,password})}>
                            <div className="form-group">
                                <div className="row p-5">

                                    <div className="col-12 my-2">
                                        <h2 className="text-center">ثبت نام</h2>
                                    </div>


                                    <div className="col-12 my-2">
                                        <label htmlFor="name">نام</label>
                                        <input type="text" name="name" className="form-control mt-2" id="name" placeholder="نام" value={name} onChange={handleInput} />
                                    </div>

                                    <div className="col-12 my-2">
                                        <label htmlFor="email">ایمیل</label>
                                        <input type="text" name="email" className="form-control mt-2" id="email" placeholder="ایمیل" value={email} onChange={handleInput} />
                                    </div>

                                    <div className="col-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="password">رمز عبور</label>
                                            <input type="password" name="password" className="form-control mt-2" id="password" placeholder="رمز عبور" value={password} onChange={handleInput} />
                                        </div>
                                    </div>

                                    <div className="col-12 my-3">
                                        <button type="submit" className="btn btn-primary btn-sm btn-block w-100 text-center">ورود</button>
                                    </div>

                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register