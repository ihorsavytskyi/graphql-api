export const people = [
    {
        id: 1,
        name: 'Ihor',
        age: 28,
        gender: 'male',
    },
    {
        id: 2,
        name: 'Ihor',
        age: 28,
        gender: 'male',
    },
    {
        id: 3,
        name: 'Ihor',
        age: 28,
        gender: 'male',
    },
]

export const getById = (id) => {
    return people.find(person => id === person.id);
}