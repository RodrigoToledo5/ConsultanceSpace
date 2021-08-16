import Button from '@material-ui/core/Button'
export default function ButtonLogout({className}){
    return(
        <Button type="button" variant='contained' className={classes.menuButton} onClick={()=>handleClick("/login")}>
            Logout
        </Button>
    )
}