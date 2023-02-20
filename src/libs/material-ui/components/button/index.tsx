
import {Button} from "@mui/material";
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
        <Button
            variant={variant}
            color={color}
            onClick={() => {
                onClick();
            }}
            startIcon={startIcon}
            endIcon={endIcon}
        >{text}
        </Button>
    );
}
export default ButtonComponent;