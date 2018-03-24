import Link from 'next/link'

const getLinks = () => 
    [
        { id: '1', link: '/', content: 'Home'},
        { id: '2', link: 'about', content: 'About'},
        { id: '3', link: 'contact', content: 'Contact'}
    ]

const HeaderLinks = () => (
    <ul>
        {getLinks().map((link) => (
            <li key={link.id}>
                <Link href={link.link}>
                    <a>{link.content}</a>
                </Link>
            </li>
        ))}
    </ul>
)

export default HeaderLinks