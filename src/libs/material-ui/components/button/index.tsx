
import {Button} from "@mui/material";
export interface buttonType {
    //properties
    text?: string;
    variant?: any;//text,content,outlined
    color?: any;
    background?: string;
    isDisabled?: boolean;
    //events
    onClick?: any;
    //objects
    startIcon?: any;
    endIcon?: any;
    //custom style
    className?:any;
    

}
export function ButtonComponent({ text, variant, color, background, isDisabled, onClick, startIcon, endIcon, className }: buttonType) {
    return (
        <Button
            variant={variant}
            color={color}
            onClick={() => {
                onClick();
            }}
            startIcon={startIcon}
            endIcon={endIcon}
            className={className}
        >{text}
        </Button>
    );
}
export default ButtonComponent;