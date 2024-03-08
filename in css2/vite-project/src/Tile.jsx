import React from 'react';

function Tile({title, description, recipe}) {
    return (
        <div className="tile">
            <h2>{title}</h2>
            <h3>{description}</h3>
            <p>{recipe}</p>
        </div>
    );
}

export default Tile;