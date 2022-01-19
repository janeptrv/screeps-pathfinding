export = Pathing;
declare const Pathing: PathingManager;
declare class PathingManager {
    constructor(options?: {});
    onRoomEnter: any;
    getCreepWorkingTarget: any;
    getCreepInstance: any;
    getCreepEntity: any;
    avoidRooms: any;
    matrixCache: Map<any, any>;
    roomMoves: Map<any, any>;
    lastMoveTime: number;
    clearMatrixCache(): void;
    clearMatrixCacheRoom(roomName: any): void;
    moveTo(creep: any, target: any, defaultOptions?: {}): 0 | -10 | -2;
    moveOffRoad(creep: any, options?: {}): boolean | -10;
    deserializeMove(data: any): any[];
    serializeMove(targetPos: any, creepPos: any, path: any): any[];
    visualizePath(startPos: any, path: any, targetPos: any, range: any, style: any): void;
    insertMove(roomName: any, move: any): void;
    removeMove(moves: any, creepName: any): void;
    getMoves(roomName: any): any;
    hasMove(pos: any, moves: any, priority: any): any;
    hasMoveWithOffRoad(pos: any, moves: any, priority: any): any;
    runMoves(): void;
    runMovesRoom(roomName: any): void;
    cleanup(): void;
    getCreepTargetInfo(creep: any, roomName: any): any;
    isCreepCanMove(creep: any): any;
    moveCreeps(moves: any): void;
    getObstacleCreep(pos: any, room: any): any;
    hasObstacleHostileCreep(room: any, x: any, y: any): any;
    hasObstacleCreep(room: any, x: any, y: any): any;
    getAdjacentPositions(pos: any): Generator<{
        x: number;
        y: number;
    }, void, unknown>;
    getCreepMovePos(creep: any, priority: any, moves: any, pathEnd: any): any;
    getCreepPushPos(creep: any, preferOffRoad: any, priority: any, moves: any, targetInfo: any): any;
    getCreepOffRoadMovePos(creep: any, offRoad: any, priority: any, moves: any, targetInfo: any): any;
    addWorkingCreepsToMatrix(matrix: any, room: any, priority: any): void;
    findPath(startPos: any, targetPos: any, defaultOptions?: {}): PathFinderPath;
    findRoute(startPos: any, targetPos: any, options?: {}): -2 | {
        exit: ExitConstant;
        room: string;
    }[];
    getRoomDistance(startPos: any, targetPos: any): number;
    getTargetRangePositions(targetPos: any, range: any, options: any): {
        pos: {
            x: number;
            y: any;
            roomName: any;
        } | {
            x: any;
            y: number;
            roomName: any;
        };
        range: number;
    }[];
    fixPath(path: any, matrix: any, roomName: any): void;
    serializePath(startPos: any, path: any): any[];
    getPathEnd(startPos: any, path: any): any;
    getCostMatrix(roomName: any, options?: {}, matrixKey?: any): any;
    addHostilesToMatrix(matrix: any, pos: any, room: any, range: any): void;
    makeStructuresMatrix(room: any, options: any): CostMatrix;
}
