import classes from './button.module.css'

const variant = {
    primary: {
        backgroundColor: '#2196f3',
        color: '#fff'
    },
    success: {
        backgroundColor: '#4caf50',
        color: '#000'
    },
    error: {
        backgroundColor: '#f44336',
        color: '#fff'
    },
    warning: {
        backgroundColor: '#ff9800',
        color: '#000'
    },
    info: {
        backgroundColor:'#80d8ff',
        color: '#000'
    }
}

const sizes = {
    small:{
        padding: '0.9rem 3rem'
    },

    medium: {
        padding:'1rem 2rem'
    }
}

const Button = (props) => {
    const userVariant = variant.primary
    const userSize = sizes.small
    return(
        <button type={props.type} 
        className={classes.Button}
        style={{
            
           

           ...userVariant,
           ...userSize
        
        
        
        }}>{props.text}</button>
    )
}


export default Button