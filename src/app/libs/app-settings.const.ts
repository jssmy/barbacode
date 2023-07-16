export class AppSettings {
    private static _NAME = 'Barba Code';

    public static get getNameTransform() {
        return this._NAME.split(' ').join('');
    }

    public static get getName() {
        return this._NAME;
    }


}
