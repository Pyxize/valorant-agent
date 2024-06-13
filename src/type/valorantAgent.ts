export default interface ValorantAgent {
    uuid: number,
    displayName: string,
    description: string,
    developerName: string,
    characterTags: null,
    displayIcon: string,
    displayIconSmall: string,
    bustPortrait: string,
    fullPortrait: string,
    fullPortraitV2: string,
    killfeedPortrait: string,
    background: string,
    backgroundGradientColors: string[],
    assetPath: string,
    isFullPortraitRightFacing: boolean,
    isPlayableCharacter: boolean,
    isAvailableForTest: boolean,
    isBaseContent: boolean,
    role: Role,
    abilities: Abilities,
    voiceLine: VoiceLine,
    mediaList: MediaList,
}
interface Abilities {
    slot: string,
    displayName: string,
    description: string,
    displayIcon: string
}
interface VoiceLine {
    minDuration: number,
    maxDuration: number,
}

interface MediaList {
    id: number,
    wwise: string,
    wave: string
}

interface Role {
    uuid: string,
    displayName: string,
    description: string,
    displayIcon: string,
    assetPath: string
}