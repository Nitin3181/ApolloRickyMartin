import useCharacter from '../Hooks/useCharacter';

function CharacterDetails({ characterId }) {
  const { loading, error, data } = useCharacter(characterId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.character;

  return (
    <div>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default CharacterDetails;
