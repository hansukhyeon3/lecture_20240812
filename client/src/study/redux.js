import React from 'react'
import './test.css'
import {legacy_createStore as createStore} from 'redux'
import {
    Provider, //어떤 컴포넌트에 전달할지 영역지정
    useSelector, //값을 불러올 때
    useDispatch //값을 변경할 때
} from 'react-redux'

const store = createStore(reducer)
function reducer(currentState,action){
    if (currentState === undefined){
        return {
            number: 1,
        }
    }
    const newState = {
        ...currentState
    }
    if (action.type === 'PLUS'){
        newState.number++
    }
    return newState
}

export default function ReduxTest(){
    return (
        <div id='container'>
            <h1>Root</h1>
            
                <Left1/>
            
        </div>
    )
}
function Left1(){
    // const number = useSelector((state)=>{
    //     return state.number
    // })
    return (
        <div>
            <h1>Left1 : </h1>
            <Provider store={store}>
                <Left2/>
            </Provider>
        </div>
    )
}
function Left2(){
    const number = useSelector((state)=>state.number)
    return (
        <div>
            <h1>Left2 : {number}</h1>
            <Left3/>
        </div>
    )
}
function Left3(){
    const number = useSelector((state)=>state.number)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Left3 : {number}</h1>
            <button onClick={()=>{
                dispatch({type:'PLUS'})
            }}>
                1개씩 증가
            </button>
        </div>
    )
}