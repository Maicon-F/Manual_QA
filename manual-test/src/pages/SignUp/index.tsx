
import NewAccountButton from "../../components/button";
import style from "./style.module.scss";


const Signup: React.FC = () => {

    return (
        <div className={style.wrapper}>
        <div className={style.container}>
              <h1>Create an account</h1>
              <p >Create an account and start purchasing!</p>
            <form>
                <div className="form-group">
                    <label>email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="insert your email" />
                </div>
                <div className="form-group">
                    <label >password</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="insert your password" />
                </div>
                <div className="form-group">
                    <label >Confirm your password</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="confirm your password" />
                </div>
            </form>
            <button >Submit</button>
        </div>
        </div>
    )
}

export default Signup;