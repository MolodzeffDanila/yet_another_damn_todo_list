export type DayType = {
    title: string,
    description: string,
}

export type ToDoStoreType = {
    monday: DayType[],
    tuesday: DayType[],
    wednesday: DayType[],
    thursday: DayType[],
    friday: DayType[],
    saturday: DayType[],
    sunday: DayType[],
}

export type dayNames = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';