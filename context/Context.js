import { createContext, useContext, useState } from 'react';


//cteate context
const MyContext = createContext();


//useContext hook
export const UsesContext = () => {
    return useContext(MyContext)
};


//custom context provaider function
export const ContextProvaider = ({ children }) => {

    //languess state
    const [isBangla, setisBangla] = useState(true);

    //checking state
    const [chekdistrict, setchekdistrict] = useState(false);
    const [checksubDistricts, setchecksubDistricts] = useState(false);
    const [checkunion, setcheckunion] = useState(false);
    const [checkpostofice, setcheckpostofice] = useState(false);
    const [checkarea, setcheckarea] = useState(false);


    //indivisule component return value state
    const [divisionSelect, setdivisionSelect] = useState('');
    const [districtSelect, setdistrictSelect] = useState('');
    const [subdistrictSelect, setsubdistrictSelect] = useState('');
    const [unionSelect, setunionSelect] = useState('');
    const [postofficeSelect, setpostofficeSelect] = useState('');
    const [areaSelect, setareaSelect] = useState('');


    //current state
    const [currentdata, setcurrentdata] = useState([]);

    //retult url
    const [url, seturl] = useState('');

    //provaider value 
    const vl = {

        isBangla,
        setisBangla,

        chekdistrict,
        setchekdistrict,

        checksubDistricts,
        setchecksubDistricts,

        checkunion,
        setcheckunion,

        checkpostofice,
        setcheckpostofice,

        checkarea,
        setcheckarea,

        divisionSelect,
        setdivisionSelect,

        districtSelect,
        setdistrictSelect,

        subdistrictSelect,
        setsubdistrictSelect,

        unionSelect,
        setunionSelect,

        postofficeSelect,
        setpostofficeSelect,

        areaSelect,
        setareaSelect,

        currentdata,
        setcurrentdata,

        url,
        seturl


    }

    return (
        < MyContext.Provider value={vl} >
            {children}
        </MyContext.Provider >
    )

}