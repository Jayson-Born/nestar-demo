import { useState } from "react";

const Community = () => {
    console.log("Community Component pages-routing");
    const [title, seTitle] = useState<string>('Hello');
    return (
        <div>
            COMMUNITY{" "}
            <button onClick={() => alert("hello MIT")} style={{ margin: "15px" }}>
                PessMe
            </button>
        </div>
    )
}

export default Community;