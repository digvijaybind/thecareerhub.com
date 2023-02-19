
import MuiButton from "@mui/material/Button";
export interface buttonType {
    //properties
    text?: string;
    variant?: any;
    color?: any;
    background?: string;
    isDisabled?: boolean;
    //events
    onClick?: any;
    //objects
    startIcon?: any;
    endIcon?: any;

}
export function ButtonComponent({ text, variant, color, background, isDisabled, onClick, startIcon, endIcon }: buttonType) {
    return (
        <MuiButton
            variant={variant}
            color={color}
            onClick={() => {
                onClick();
            }}
            startIcon={startIcon}
            endIcon={endIcon}
        >{text}
        </MuiButton>
    );
}
export default ButtonComponent;