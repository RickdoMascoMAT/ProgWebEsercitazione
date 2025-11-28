import {type JSX, useState} from "react";

type Props = {
    children?: React.ReactNode;
};

/**
 * ToggleMsg
 *
 * React Component that show or hide the content of passed as a children.
 *
 * Use:
 * <ToggleMsg>Txt to show</ToggleMsg>
 *
 * Props:
 * - children?: React.ReactNode - content to show/hide (string, node JSX, ecc.)
 *
 * Behaviour:
 * - Show the content when the content of `visibility` = true (default).
 * - Press the button to alternate the visibility (Hide / Show).
 *
 * Return:
 * - ReactElement that contain the conditional paragraph and the toggle button.
 */

export function ToggleMsg({children}:Props):JSX.Element{
    const[visibility,setVisibility] = useState(!!children);
    const WARNING_MSG = 'WARNING: "No String inserted in the input"';

    if(children) {
        return (
            <div>
                {visibility && <p>{children}</p>}
                <button onClick={() => setVisibility(!visibility)}>
                    {visibility ? "Hide" : "Show"}
                </button>
            </div>
        );
    } else {
        return (
            <div>
                {visibility && <p>{WARNING_MSG}</p>}
                <button onClick={() => setVisibility(!visibility)}>
                    {visibility ? "Hide" : "Show"}
                </button>
            </div>
        );
    }
}