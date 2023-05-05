import { UsesContext } from "../../../context/Context";
import myUnions from "../../../database/unions.json";
import styles from "../../styles/Select.module.css";


export default function UnionSelect() {

    //consume context
    const { currentdata, subdistrictSelect, setunionSelect, setcheckpostofice, districtSelect, isBangla } = UsesContext();


    //find corospending sub district
    const corospendingdata = myUnions.Unions.filter((current) => {
        return current.upazilla_id === subdistrictSelect;
    })

    //handle on chenge of select tag
    const handleChange = (e) => {

        setunionSelect(e.target.value);
        setcheckpostofice(true);

        // hiden select tag when the user don't select optopm
        if (e.target.value === "Select Union") {
            setcheckpostofice(false);
        }
    }




    return (
        <select name="UnionSelect" onChange={(e) => handleChange(e)} className={styles.werper}>
            <option>Select Union</option>
            {
                corospendingdata.map((item, index) => {
                    return <option key={index} value={item.id}>{isBangla ? item.bn_name : item.name}</option>
                })
            }

        </select>
    )
}
