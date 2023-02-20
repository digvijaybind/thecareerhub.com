
import {Button} from "@mui/material";
export interface navigationType {
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
    style?:any;
    

}
export function NavigationComponent({ text, variant, color, background, isDisabled, onClick, startIcon, endIcon, className, style }: navigationType) {
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
            style={style}
            
        >{text}
        </Button>
    );
}
export default NavigationComponent;