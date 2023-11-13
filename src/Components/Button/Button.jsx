import "./Button.scss"



function Button({colorButton, titleButton, typeButton, colortitle}) {

    return (
        <button className="button" type={typeButton} style={{backgroundColor:`${colorButton}`, color:`${colortitle}`}}>
                <p>{titleButton}</p>
                <div className="button-arrow">
                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.0384 6.50003H1M9.07688 1L16 6.50003L9.07688 12V1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
        </button>
    )
}

export default Button;