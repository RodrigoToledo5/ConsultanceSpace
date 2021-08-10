import React,{ useEffect,useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getallActivities, getContry, getCountriesbyActivities,getByID} from '../../actions';

export default function Home(){
    const dispatch = useDispatch();
    const state = useSelector(store => store.countrySearch);
    const [offset, setOffset] = useState(0);
    const [order,setOrder]=useState("");
    const [continent,setContinent]=useState("");
    const [activity,setActivity]=useState("");
    const [isfilter,setIsfilter]=useState(false);//este estado me permite hacer switch entre el render para el filtrado
    
    function handlemouseoveractivity(e){

        dispatch(getByID(e.target.id))
    }

    function handleActivity(e){
        if(!e.target.value.length){
            setOffset(0)
            setIsfilter(false)
        }
        else {
            setOffset(0)
            setActivity(e.target.value)
            setIsfilter(true)
        }
    }

    function sendNext(){
        if (state.Countries.length){
            setOffset(offset+10);
        }
        else setOffset(0)      
    }

    function sendBack(){
        if(offset>=10) {
            setOffset(offset-10)
        };  
    }

    function checkOrder(order){
        setOffset(0);
        setOrder(order);
    }

    function checkContinent(continent){
        setOffset(0);
        setOrder(order);
        setContinent(continent);
    }
    
    
    useEffect(() => {
        dispatch(getallActivities())
        if(!isfilter){
            dispatch(getContry(offset,order,continent))
        }
        else {
            dispatch(getCountriesbyActivities(activity,offset,order,continent))   
        }

    }, [offset,dispatch,order,continent,activity,isfilter])
    
    function renderActivities(){
        return (
            <div>
                <h3>Activities</h3>
                {state.Activities.map((activity,i)=>{
                    if(activity.name){
                        return(
                            <button className={"btn_setfilter"} id={i} key={i} value={activity.name} onClick={(even)=>handleActivity(even)}>{activity.name}</button>
                        )
                    }
                    return null
                })}
                <button className={"btn_setfilterplus"} value={""} onClick={(even)=>handleActivity(even)}>X</button>
                {isfilter&&<h5>Activity: {activity}</h5>}
            </div>
        )
    }

    function showCountries(){
        return (
            <>
                <div className="flex-cointainer__card">
                    {state.Countries&&state.Countries.map((country,i)=>{
                        return(
                                
                                    <div id={country.id} key={i} className="card" onMouseEnter={handlemouseoveractivity}>
                                        <div>Name: {country.name}</div>
                                        <img className="img" src={country.flagImg} alt="Flag"></img> 
                                        <div>Continent: {country.continent}</div>
                                    </div>
                            
                            )
                    })}
                </div>
            </>
        )
    }
    function renderbtnBack(){
        return(
            <button className="btn_back" onClick={sendBack}></button>
        )
    }

    function renderbtnNext(){
        return (<button className="btn_next" onClick={sendNext}></button>)
    }

    function checkOffset(){
        if (offset===0) return false
        else return true
    }
    function checkstateCountries(){
        if(state.Countries.length<10) return false;
        if (state.Countries.length===10)return true;
        else return false
    }
    return(
        <div className="main">
            <h3>Countries</h3>
            <button className={"btn_setfilter"} onClick={()=>checkOrder("AtoZ")}>AtoZ</button>
            <button className={"btn_setfilter"} onClick={()=>checkOrder("ZtoA")}>ZtoA</button>
            <button className={"btn_setfilter"} onClick={()=>checkOrder("pobAsc")}>pobAsc</button>
            <button className={"btn_setfilter"} onClick={()=>checkOrder("pobDes")}>pobDes</button>
            <button className={"btn_setfilterplus"} onClick={()=>checkOrder("")}>X</button>
            {order&&<h5>Sorted by:{order}</h5>}
            <h3>Continents</h3>
            <button className={"btn_setfilter"} onClick={()=>checkContinent("Africa")}>Africa</button>
            <button className={"btn_setfilter"} onClick={()=>checkContinent("Americas")}>Americas</button>
            <button className={"btn_setfilter"} onClick={()=>checkContinent("Asia")}>Asia</button>
            <button className={"btn_setfilter"} onClick={()=>checkContinent("Europe")}>Europe</button>
            <button className={"btn_setfilter"} onClick={()=>checkContinent("Oceania")}>Oceania</button>
            <button className={"btn_setfilter"} onClick={()=>checkContinent("Polar")}>Polar</button>
            <button className={"btn_setfilterplus"} onClick={()=>checkContinent("")}>X</button>
            {continent&&<h5>Filter by:{continent}</h5>}

            {renderActivities()}
            {showCountries()}
            <div className="cointainer_btn_pg">
                {checkOffset()&&renderbtnBack()}
                {checkstateCountries()&&renderbtnNext()}
            </div>

        </div>
    )
}
//state.Leaded es un estado flag que use para que el codigo esa mas legible