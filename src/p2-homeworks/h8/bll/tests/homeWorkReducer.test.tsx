import React from 'react'
import {homeWorkReducer, sortStateAge, sortStateName, sortStatusOptimist, sortStatusPissimist} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType>

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3, status: '--и тут норм'},
        {_id: 1, name: 'Александр', age: 66, status: '--поеду домой'},
        {_id: 2, name: 'Коля', age: 16, status: '--поеду домой'},
        {_id: 3, name: 'Виктор', age: 44, status: '--поеду домой'},
        {_id: 4, name: 'Дмитрий', age: 40, status: '--поеду домой'},
        {_id: 5, name: 'Ирина', age: 55, status: '--ну а как я кота одного оставлю'},
    ]
})

test('sort state name ', () => {
    const newState = homeWorkReducer(initialState, sortStateName())


    expect(newState.length).toBe(6)
    expect(newState[0].name).toBe('Александр')
})


test('sort state age', () => {
    const newState = homeWorkReducer(initialState, sortStateAge())

    expect(newState.length).toBe(6)
    expect(newState[1].age).toBe(16)
    expect(newState[0].name).toBe('Кот')
})
test('sort status pissimist', () => {
    const newState = homeWorkReducer(initialState, sortStatusPissimist('--поеду домой'))

    expect(newState.length).toBe(2)
    expect(newState[1].age).toBe(55)
    expect(newState[0].name).toBe('Кот')

})

test('sort status optimist', () => {
    const newState = homeWorkReducer(initialState, sortStatusOptimist('--поеду домой'))

    expect(newState.length).toBe(4)
    expect(newState[1].status).toBe('--поеду домой')
    expect(newState[0].name).toBe('Александр')
})
