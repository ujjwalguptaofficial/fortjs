export interface ISessonStore {
    sessionId: string;
    get(key: string): Promise<any>;
    isAnyExist(): Promise<boolean>;
    isExist(key: string): Promise<boolean>;
    getAll(): Promise<{ [key: string]: any }>;
    set(key: string, val: any): Promise<void>;
    setMany(values: { [key: string]: any }): Promise<void[]>;
    remove(key: string): Promise<void>;
    clear(): Promise<void>;
}