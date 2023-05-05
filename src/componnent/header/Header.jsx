import { useRouter } from "next/router";
import { UsesContext } from "../../../context/Context";
import valueChecker from "../../../utlizer/valueChecker";
import Languese from "../../componnent/Languese";
import styles from "../../styles/Header.module.css";
import Container from "../Container";
import DivisionSelect from "../select/DicisionSelect";
import DistrictSelect from "../select/DistrictSelect";
import SubDistricts from "../select/SubDistricts";
import UnionSelect from "../select/UnionSelect";

export default function Header() {

  const router = useRouter();

  //consume context
  const { chekdistrict, setcheckunion, setchekdistrict, setchecksubDistricts, checksubDistricts, checkunion, checkarea, checkpostofice, isBangla, divisionSelect, districtSelect, subdistrictSelect, unionSelect, seturl, url } = UsesContext();

  //handle clear function
  function handleClear() {
    router.reload();

  }



  //handle search
  const handleSercha = () => {

    valueChecker(divisionSelect, districtSelect, subdistrictSelect, unionSelect, seturl);

  }








  return (
    <div className={styles.wrper}>
      <div>
        <Container>
          <div className={styles.brandWrp}>
            <h2>Info Hub of Bangladesh</h2>
            <Languese />
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className={styles.selectWrp}>
            <DivisionSelect />
            {chekdistrict && <DistrictSelect />}
            {checksubDistricts && <SubDistricts />}
            {checkunion && <UnionSelect />}
            {/* {checkpostofice && <PostoficeSelect />}
            {checkarea && <AreaSelect />} */}
            <button onClick={() => handleClear()} className={styles.searchBtn}>Clear</button>
            <button onClick={() => handleSercha()} className={styles.searchBtn}>Go</button>
          </div>
        </Container>
      </div>
    </div>
  )
}
