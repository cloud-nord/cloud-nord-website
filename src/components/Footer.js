import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://www.linkedin.com/company/cloud-nord/" className="icon alt fa-linkedin"><span className="label">Linkedin</span></a></li>
                    <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://github.com/cloud-nord" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:cloudnord2020@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2020 association Cloud Nord</li><li>Fait avec <i className="icon alt fa-heart"></i> à Lille par la team Cloud Nord. Crédit photo : Unsplash</li>
                </ul>
            </section>
        )
    }
}

export default Footer
