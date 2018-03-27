import Link from 'next/link'

const getLinks = () => 
    [
        { id: '1', link: '/', content: 'Home'},
        { id: '2', link: '/about', content: 'About'},
        { id: '3', link: '/contact', content: 'Contact'}
    ]

const listStyle = {
    display: 'flex',
    listStyleType: 'none'
}

const listItemStyle = {
    marginLeft: '20px',
}

const linkStyle = {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#000'
}

const HeaderLinks = () => (
    <ul style={listStyle}>
        {getLinks().map((link) => (
            <li key={link.id} style={listItemStyle}>
                <Link href={link.link}>
                    <a style={linkStyle}>{link.content}</a>
                </Link>
            </li>
        ))}
    </ul>
)

export default HeaderLinks