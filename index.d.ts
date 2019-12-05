/**
 * FFBinaries with promise support, request normalisation and a simplified API.
 * @example
 * ```
 * const ffBinaries = require("ffbinaries-extra");
 *
 * ffBinaries.downloadBinaries();
 * //=> Promise<void>
 * ```
*/
declare const ffbinaries: {
    /**
     * Get the versions of FFBinaries available.
    */
    getVersions(): Promise<string[]>

    /**
     * Get the latest version of FFBinaries available.
    */
    getLatestVersion(): Promise<string>

    /**
     * Download the FFBinaries.
    */
    downloadBinaries(options?: {
        /**
         * An array of string values that describes which components to download. If not provided it will default to all components available for the platform.
        */
        components?: Array<"ffmpeg" | "ffprobe" | "ffserver" | "ffplay">,

        /**
         * The version of ffmpeg to download.
        */
        version?: string,

        /**
        * Automatically extract downloaded zip files. Defaults to true.
        */
        extract?: boolean

        /**
         * The path where the binaries will be downloaded to.
        */
        destination?: string,
    }): Promise<void>

    /**
     * The platforms supported by FFBinaries.
    */
    supportedPlatforms: string[],

    /**
     * The current platform as detected from the os type and architecture.
    */
    currentPlatform: string
}

export = ffbinaries;
