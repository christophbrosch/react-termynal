export default Termynal;
/** Generate a terminal widget. */
declare class Termynal {
    /**
     * Construct the widget's settings.
     * @param {(string|Node)=} container - Query selector or container element.
     * @param {Object=} options - Custom settings.
     * @param {string} options.prefix - Prefix to use for data attributes.
     * @param {number} options.startDelay - Delay before animation, in ms.
     * @param {number} options.typeDelay - Delay between each typed character, in ms.
     * @param {number} options.lineDelay - Delay between each line, in ms.
     * @param {number} options.progressLength - Number of characters displayed as progress bar.
     * @param {string} options.progressChar – Character to use for progress bar, defaults to █.
     * @param {number} options.progressPercent - Max percent of progress.
     * @param {string} options.cursor – Character to use for cursor, defaults to ▋.
     * @param {Object[]} lineData - Dynamically loaded line data objects.
     * @param {boolean} options.noInit - Don't initialise the animation.
     */
    constructor(container?: (string | Node) | undefined, options?: Object | undefined);
    container: Node | null;
    pfx: string;
    startDelay: any;
    typeDelay: any;
    lineDelay: any;
    progressLength: any;
    progressChar: any;
    progressPercent: any;
    cursor: any;
    lineData: Element[];
    /**
     * Initialise the widget, get lines, clear container and start animation.
     */
    init(): void;
    lines: any[] | undefined;
    /**
     * Start the animation and rener the lines depending on their data attributes.
     */
    start(): Promise<void>;
    /**
     * Animate a typed line.
     * @param {Node} line - The line element to render.
     */
    type(line: Node): Promise<void>;
    /**
     * Animate a progress bar.
     * @param {Node} line - The line element to render.
     */
    progress(line: Node): Promise<void>;
    /**
     * Helper function for animation delays, called with `await`.
     * @param {number} time - Timeout, in ms.
     */
    _wait(time: number): Promise<any>;
    /**
     * Converts line data objects into line elements.
     *
     * @param {Object[]} lineData - Dynamically loaded lines.
     * @param {Object} line - Line data object.
     * @returns {Element[]} - Array of line elements.
     */
    lineDataToElements(lineData: Object[]): Element[];
    /**
     * Helper function for generating attributes string.
     *
     * @param {Object} line - Line data object.
     * @returns {string} - String of attributes.
     */
    _attributes(line: Object): string;
}
