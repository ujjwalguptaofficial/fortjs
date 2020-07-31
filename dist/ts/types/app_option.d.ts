import { FolderMap, EtagOption } from ".";
export declare type AppOption = {
    /**
     * eTag Settings
     *
     * @type {EtagOption}
     */
    eTag?: EtagOption;
    /**
     * folders which should be visible to requests. By default nothing is allowed.
     *
     * @type {FolderMap[]}
     */
    folders?: FolderMap[];
};
