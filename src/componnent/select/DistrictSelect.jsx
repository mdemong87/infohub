import { UsesContext } from '../../../context/Context';
import myDistricts from "../../../database/districts.json";
import styles from "../../styles/Select.module.css";


export default function DistrictSelect() {

  //consume context
  const { divisionSelect, setchecksubDistricts, setdistrictSelect, setcurrentdata, isBangla } = UsesContext();


  //find corospending districts list
  const corospentdingData = myDistricts.Districts.filter((currentValue) => {
    return currentValue.division_id === divisionSelect

  })


  //selete onchenge funcion
  const handlechangle = (e) => {

    setdistrictSelect(e.target.value);
    setchecksubDistricts(true);
    setcurrentdata(corospentdingData)

    // check user was select value or not
    if (e.target.value === "Select District") {
      setchecksubDistricts(false);
    }
  }


  return (
    <select onChange={(e) => handlechangle(e)} name="DivisionSelect" className={styles.werper}>
      <option>Select District</option>
      {
        corospentdingData.map((item, index) => {
          return <option key={index} value={item.id}>{isBangla ? item.bn_name : item.name}</option>
        })
      }

    </select>
  )
}