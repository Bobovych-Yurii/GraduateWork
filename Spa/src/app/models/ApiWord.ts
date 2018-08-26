export class ApiWordModel {
    Word: string;
    Definition: string;
    Example: string;

    constructor(word?: string, definition?: string, example?: string) {
        this.Word = word ? word : '';
        this.Definition = definition ? definition : '';
        this.Example = example ? example : '';
    }
}
