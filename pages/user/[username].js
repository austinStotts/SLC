import { useRouter } from 'next/router'

export default function User () {
    const router = useRouter();
    const username = router.query.username;
    let l_token;
    let l_username;
    console.log(typeof window)
    if(typeof window !== "undefined") {
        console.log("loaded")
        l_token = localStorage.getItem("token");
        l_username = localStorage.getItem("username")
    
    }

    if(username === l_username) {
        console.log("url matches logged in user");
        console.log("url page: ", username);
        console.log("logged in username: ", l_username);
    } else {
        console.log("url DOES NOT match logged in user");
        console.log("url page: ", username);
        console.log("logged in username: ", l_username);
    }

    return (
        <div>
            <p className='title'>{username}</p>
        </div>
    )
}