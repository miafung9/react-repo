import Link from './Link'

const LinkContainer = () => {
    const links = [
        {
            id:1,
            href: "https://reactjs.org",
            content: "Learn React"
        },
        {
            id: 2,
            href: "https://youtube.com",
            content: "Go to YouTube"
        },
        {
            id:3,
            href: "https://google.com",
            content: "Go to Google"
        },{
            id:4,
            href: "https://apple.com",
            content: "Go to Apple"
        },{
            id:5,
            href: "https://amazon.com",
            content: "Go to Amazon"
        }
    ]

    return(
        <ul>
            {links.map(({id, href, content}) => {
                return(
                    <li key={id}>
                        <Link href = {href}> {content}</Link>
                        <br/>
                    </li>
                )
            })}
            
             {/* <Link href = "https://reactjs.org"> 
                Learn React
             </Link>
             <br />
            <Link href = "https://google.com">
                 Google  
             </Link>  */}
        </ul>
    )
}

export default LinkContainer