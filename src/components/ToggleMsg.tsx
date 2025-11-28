import {type JSX, useState} from "react";
import {Button} from "./Button.tsx";

type Props = {
    children?: React.ReactNode;
};

/**
 * ToggleMsg
 *
 * React component that shows or hides the content passed as `children`.
 *
 * Use:
 * <ToggleMsg>Text to show</ToggleMsg>
 *
 * Props:
 * - `children?: React.ReactNode` - content to show/hide.
 *
 * Behaviour:
 * - Visibility is initialized to `true` if `children` is present, `false` otherwise.
 * - Renders the provided `children` when visible, or a warning message when no children are provided.
 * - Uses `Button` (props: `label: string`, `onClick: () => void`) to toggle visibility. Button labels are `"Hide"` and `"Show"`.
 *
 * @returns  {JSX.Element}
 */

export function ToggleMsg({children}:Props):JSX.Element{
    const[visibility,setVisibility] = useState<boolean>(!!children);
    const WARNING_MSG = 'WARNING: "No String inserted in the input"';

    return (
        <div>
            {visibility && <p>{children ?? WARNING_MSG}</p>}
            <Button onClick={() => setVisibility(v => !v)} label={visibility ? "Hide" : "Show"}/>
        </div>
    );
}