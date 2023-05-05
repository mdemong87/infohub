import districts from "../database/districts.json";
import divisions from "../database/divisions.json";
import unions from "../database/unions.json";
import upazilas from "../database/upazilas.json";
import urlfinder from "./urlFinder";


function valueChecker(divisionSelect, districtSelect, subdistrictSelect, unionSelect, seturl) {


    if (divisionSelect !== "" && districtSelect === "" && subdistrictSelect === "" && unionSelect === "") {

        urlfinder(divisions.divisions, divisionSelect, seturl);



    } else if (divisionSelect !== "" && districtSelect !== "" && subdistrictSelect === "" && unionSelect === "") {


        urlfinder(districts.Districts, districtSelect, seturl);


    } else if (divisionSelect !== "" && districtSelect !== "" && subdistrictSelect !== "" && unionSelect === "") {

        urlfinder(upazilas.upazilas, subdistrictSelect, seturl);


    } else if (divisionSelect !== "" && districtSelect !== "" && subdistrictSelect !== "" && unionSelect !== "") {

        urlfinder(unions.Unions, unionSelect, seturl);

    }
}

export default valueChecker;