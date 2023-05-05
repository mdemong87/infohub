import { UsesContext } from "../../../context/Context";
import styles from "../../styles/Select.module.css";


export default function PostoficeSelect() {

    //consume context
    const { currentdata, subdistrictSelect, setpostofficeSelect, setcheckarea, districtSelect } = UsesContext();


    // //find corospending sub district
    // const corospendingdata = currentdata.districts.find((current) => {
    //     return current.name === districtSelect // have to replace by post-office
    // })

    //handle on chenge of select tag
    const handleChange = (e) => {

        setpostofficeSelect(e.target.value);
        setcheckarea(true);

        // hiden select tag when the user don't select optopm
        if (e.target.value === "Select Post-office") {
            setcheckarea(false);
        }
    }




    return (
        <select name="PostoficeSelect" onChange={(e) => handleChange(e)} className={styles.werper}>
            <option>Select Post-office</option>
            {/* {
                corospendingdata.subDistricts.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })
            } */}

        </select>
    )
}
