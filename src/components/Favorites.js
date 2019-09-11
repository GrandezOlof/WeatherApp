import React from 'react';

export default class Favorites extends React.Component {
    render() {
        const favoriteList = this.props.favorites.map(favorite => {
            return this.props.favorites !== 0 ? (
                <div key={favorite}>
                    <li className='listF'>
                        <div className="card cardStyleF">
                            <button type='button' className='btn btn-primary' onClick={this.props.getFavorite} >
                                {favorite}
                            </button>
                        </div>
                    </li>
                </div>
            ) : (<p>No Favorites Yet</p>)
        })
        return (
            <ul>
                {favoriteList}
            </ul>
        )
    }
}
