import Spinner from "../Assets/Spinner.gif"

export default function Loader(){
    return(
    <div className="w-full flex justify-center">
        <img src={Spinner} alt="" />
    </div>
    )
}