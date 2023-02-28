import {createLog, bold, green, red, yellow, blue} from './console'

export interface EnvMethods {
    getGame: ()=>Game,
    getRoomByName: (roomName:string) => Room | undefined,
    getCreepByName: (creepName:string) => Creep| undefined,
    getPowerCreepByName: (creepName: string) => PowerCreep | undefined
    getObjectById: typeof Game.getObjectById
    getFlagByName: (flagName: string) => Flag | undefined
    inInterval: (interval: number) => boolean
    log: ReturnType<typeof createLog>
    colorful: {
        green: typeof green
        red: typeof red
        yellow: typeof yellow
        blue: typeof blue
        bold: typeof bold
    }
}

export interface EnvContext{
    methods: EnvMethods
}

interface ObjectWithId<T extends _HasId> extends RoomObject{
    id:Id<T>
}

declare global {
    interface Structure {
        // 是否为自己的建筑，某些建筑不包含此属性，写起来会多做一层判断，所以加上
        my?: boolean
    }
}