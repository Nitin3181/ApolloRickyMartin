import React from 'react';
import useCharacters from '../Hooks/useCharacters';

const Character = () => {
  const { loading, error, data } = useCharacters();

  console.log(loading, error, data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="Container">
      <header className="App-header">
        {data.characters.results.map((character, index) => (
          <p key={index} className="item">
            {character.name}
            <img className="image" src={character.image} alt={character.name} />
          </p>
        ))}
      </header>
    </div>
  );
};

export default Character;
