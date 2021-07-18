import { Audio } from 'expo-av';

const SoundRemove = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/remove.mp3'));
    await sound.playAsync();
}

const SoundOk = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/ok.wav'));
    await sound.playAsync();
}

export default {
    SoundRemove,
    SoundOk,
}