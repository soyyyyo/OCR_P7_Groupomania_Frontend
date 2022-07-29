import { useEffect, useState } from "react";

const TestApi = (props) => {
    // console.log("props", props);
    // const { currentUser } = props;
    // console.log("destructuration de props", currentUser);
    const [posts, setPosts] = useState();

    useEffect(() => {
        console.log("je suis dans le useEffect");
        const fetchApi = async () => {
            try {
                const response = await fetch("http://localhost:4200/api/posts");
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.log("SOMETHING WENT WRONG", error);
            }
        }

        fetchApi();
    }, []);

    const fetchApi = async () => {
        try {
            const response = await fetch("http://localhost:4200/api/posts");
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.log("SOMETHING WENT WRONG", error);
        }
    }


    console.log("result posts", posts);

    return (
        <>
            <p>Joris</p>
            <button onClick={fetchApi}>
                GO FETCH THIS
            </button>
        </>
    )
};

export default TestApi;