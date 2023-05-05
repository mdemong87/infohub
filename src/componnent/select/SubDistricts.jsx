import { UsesContext } from '../../../context/Context';
import mysubDistricts from "../../../database/upazilas.json";
import styles from "../../styles/Select.module.css";

export default function SubDistricts({ setvalue }) {


    //consume context
    const { currentdata, districtSelect, setcheckunion, setsubdistrictSelect, isBangla } = UsesContext();


    //find corospending sub district
    const corospendingdata = mysubDistricts.upazilas.filter((current) => {
        return current.district_id === districtSelect
    })


    //handle on chenge of select tag
    const handleChange = (e) => {

        setsubdistrictSelect(e.target.value);
        setcheckunion(true);

        // hiden select tag when the user don't select optopm
        if (e.target.value === "Select Sub-District") {
            setcheckunion(false);
        }
    }

    return (
        <select name="SubDistrictSelect" onChange={(e) => handleChange(e)} className={styles.werper}>
            <option>Select Sub-District</option>
            {
                corospendingdata.map((item, index) => {
                    return <option key={index} value={item.id}>{isBangla ? item.bn_name : item.name}</option>
                })
            }

        </select>
    )
}
