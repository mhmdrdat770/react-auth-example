const Register = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 shadow border mt-4">
                        <form>
                            <div className="form-group">
                                <div className="row p-5">

                                <div className="col-12 my-2">
                                    <h2 className="text-center"> ورود</h2>
                                </div>


                                    <div className="col-12 my-2">
                                        <label htmlFor="email">ایمیل</label>
                                        <input type="text" className="form-control mt-2" id="email" placeholder="ایمیل" />
                                    </div>

                                    <div className="col-12 my-2">
                                        <div className="form-group">
                                            <label htmlFor="password">رمز عبور</label>
                                            <input type="password" className="form-control mt-2" id="password" placeholder="رمز عبور" />
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