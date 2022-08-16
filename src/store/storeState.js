import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

// Model the application state.
class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

     async fetddd  (){
        let arr =[]
        await fetch("http://localhost:3004/TaskList")
        .then(res=>res.json())
        .then(re=> arr.push(re))
        return arr
    }
    increase() {
        this.secondsPassed += 1
    }
    dess() {
        this.secondsPassed -= 1
    }

    reset() {
        this.secondsPassed = 0
    }
}

const storeState = new Timer()
export default storeState