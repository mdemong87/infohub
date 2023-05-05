import { UsesContext } from "../../../context/Context";
import styles from "../../styles/Select.module.css";


export default function AreaSelect() {

    //consume context
    const { currentdata, subdistrictSelect, setareaSelect, setcheckarea, districtSelect } = UsesContext();


    // //find corospending sub district
    // const corospendingdata = currentdata.districts.find((current) => {
    //     return current.name === districtSelect // have to replace by post-office
    // })

    //handle on chenge of select tag
    const handleChange = (e) => {

        setareaSelect(e.target.value);

        // hiden select tag when the user don't select optopm
        if (e.target.value === "Select Area") {
            alert("Select your Area");
        }
    }

    return (
        <select name="AreaSelect" onChange={(e) => handleChange(e)} className={styles.werper}>
            <option>Select Area</option>
            {/* {
                corospendingdata.subDistricts.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })
            } */}

        </select>
    )
}
