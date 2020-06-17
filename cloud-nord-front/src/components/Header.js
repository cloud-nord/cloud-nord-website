import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1><strong>Cloud Nord</strong><br />
                    Ch'cloud day des gens du Nord</h1>
                    <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                    lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Restons en contact</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
