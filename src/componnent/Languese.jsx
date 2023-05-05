import { UsesContext } from "../../context/Context";
import styles from "../styles/Select.module.css";

export default function Languese() {

    //consume context
    const { setisBangla } = UsesContext();

    //onchage event handle
    function handleChange(e) {
        if (e.target.value === "English") {
            setisBangla(false);
        } else if (e.target.value === "Bangla") {
            setisBangla(true)
        }
    }

    return (
        <select onChange={(e) => { handleChange(e) }} className={styles.werper}>
            <option value="Bangla">Bangla</option>
            <option value="English">English</option>
        </select>
    )
}
