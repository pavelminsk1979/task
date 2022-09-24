import {UserType} from "../HW8";


type homeWorkReducerType=sortStateNameType|sortStateAgeType|sortStatusOptimistType|addInitialType|sortStatusPissimistType



export const homeWorkReducer = (state: Array<UserType>, action: homeWorkReducerType) => {
    switch (action.type) {
        case 'SORT-STATE-NAME': {

            return  [...state.sort((x,y)=>x.name<y.name?-1:1)]
        }
        case 'SORT-STATE-AGE': {

            return [...state.sort((x,y)=>x.age-y.age)]
        }
        case 'ADD-STATE': {

            return action.state
        }
        case 'SORT-STATUS-OPTIMIST': {
            return state.filter(el=>el.status===action.status)
        }
        case 'SORT-STATUS-PISIMIST': {
            return state.filter(el=>el.status!==action.status)
        }
        default: return state
    }
}

type sortStateNameType=ReturnType<typeof sortStateName>

export const sortStateName = () => {
  return{
      type:'SORT-STATE-NAME',

  }as const
}

type sortStateAgeType=ReturnType<typeof sortStateAge>

export const sortStateAge = () => {
  return{
      type:'SORT-STATE-AGE',
  }as const
}

type sortStatusOptimistType=ReturnType<typeof sortStatusOptimist>

export const sortStatusOptimist = (status:string) => {
  return{
      type:'SORT-STATUS-OPTIMIST',
      status
  }as const
}

type addInitialType= ReturnType<typeof addInitial>
export const addInitial = (state:Array<UserType>) => {
  return{
      type:'ADD-STATE',
      state
  }as const
}

type sortStatusPissimistType=ReturnType<typeof sortStatusPissimist>

export const sortStatusPissimist = (status:string) => {
    return{
        type:'SORT-STATUS-PISIMIST',
        status
    }as const
}
