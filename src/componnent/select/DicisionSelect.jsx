import { UsesContext } from '../../../context/Context';
import myDivision from "../../../database/divisions.json";
import styles from "../../styles/Select.module.css";



export default function DivisionSelect() {

  //consume context
  const { setdivisionSelect, setchekdistrict, setdivisionId, divisionId, divisionSelect, isBangla, districtSelect, subdistrictSelect, unionSelect, seturl } = UsesContext();

  //selete onchenge funcion
  const handlechangle = (e) => {

    setdivisionSelect(e.target.value);
    setchekdistrict(true);

    // check user was select value or not
    if (e.target.value === "Select Division") {
      setchekdistrict(false);
    }
  }

  return (
    <select onChange={(e) => handlechangle(e)} name="DivisionSelect" className={styles.werper}>
      <option value="Select Division">Select Division</option>
      {
        myDivision.divisions.map((item, index) => {
          return <option key={index} value={item.id}>{isBangla ? item.bn_name : item.name}</option>
        })
      }
    </select>
  )
}
