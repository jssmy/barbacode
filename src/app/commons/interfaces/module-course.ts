interface ModuleItemCourse {
    name: string;
    timeStamps: number;
}
export interface ModuleCourse {
    name: string;
    items: ModuleItemCourse[]
}
