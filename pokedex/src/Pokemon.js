import React from 'react';
import { View, Text, Image, Platform, Button, Share } from 'react-native';
import { Link } from './routing';

const Pokemon = props => {
  const { selectedPokemon } = props;
  const backButton = (
    <View>
      <Link to="/">
        <Text>Go Back</Text>
      </Link>
    </View>
  );

  const handlePress = () => {
    Share.share({
      message: 'Check out my favorite Pokémon',
      url: props.selectedPokemon.photoUrl
    });
  };

  if (!selectedPokemon) {
    return (
      <View>
        {backButton}
        <Text>No Pokémon selected</Text>
      </View>
    );
  }

  return (
    <View>
      {backButton}
      <View>
        <Text>{`#${selectedPokemon.number}`}</Text>
      </View>
      <View>
        <Text>{`Name: ${selectedPokemon.name}`}</Text>
      </View>
      <View>
        <Text>{`Type: ${selectedPokemon.type}`}</Text>
      </View>
      <View>
        <Image style={{ width: 50, height: 50 }} source={{ uri: selectedPokemon.photoUrl }} />
      </View>
      {Platform.OS !== 'web' && (
        <View>
          <Button title="Share" onPress={handlePress} />
        </View>
      )}
    </View>
  );
};

export default Pokemon;
