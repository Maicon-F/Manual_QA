
import Button from "../../components/button";
import style from "./style.module.scss";


const Login: React.FC = () => {

    return (
        <div className={style.wrapper}>
        <div className={style.container}>
              <h1 className="text-center text-dark mt-5">Already our costumer?</h1>
              <p className="text-center text-dark">Login and enjoy our offers or create a new account  <a href="/signup">here</a>!</p>
            <form>
                <div className="form-group">
                    <label>email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your email" />
                </div>
                <div className="form-group">
                    <label >password</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your password" />
                </div>
            </form>
            <button >Submit</button>
        </div>
        </div>
    )
}

export default Login;