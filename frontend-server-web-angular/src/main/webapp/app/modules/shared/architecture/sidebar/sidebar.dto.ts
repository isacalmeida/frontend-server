export class SidebarDTO {
    label: string;
    route: string;
    icone: string;

    constructor(label: string, route: string, icone: string) {
        this.label = label;
        this.route = route;
        this.icone = icone;
    }
}
