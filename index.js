// const { it } = require("mocha")

// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(arr) {
  return  arr.map(createEmployeeRecord)
}

function createTimeInEvent(obj, dateTime) {

    let puncheDay = dateTime.split('').slice(0,10).join('')
    let punchTime = dateTime.split('').slice(11).join('')

    obj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(punchTime),
        date: puncheDay
    })

    return obj
}

function createTimeOutEvent(obj, dateTime) {

    let puncheDay = dateTime.split('').slice(0,10).join('')
    let punchTime = dateTime.split('').slice(11).join('')

    obj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(punchTime),
        date: puncheDay
    })

    return obj  
}

function hoursWorkedOnDate(obj, date) {
    let timeIn = obj.timeInEvents.filter(el => (el.date === date))
    let timeOut = obj.timeOutEvents.filter(el =>(el.date === date)) 

    for (let i = 0; i < timeIn.length; i++) {
    
        return (timeOut[i].hour - timeIn[i].hour)/100
    
    }
}

function wagesEarnedOnDate(obj, date) {
    return obj.payPerHour *(hoursWorkedOnDate(obj, date))
}

function allWagesFor(obj) {

    let dateArr = []
    console.log('test 1')
    console.log(obj)
    let dates = obj.timeInEvents.filter(el => {
       
        return el.date})
    for(const el of dates){
     
       dateArr.push(wagesEarnedOnDate(obj, el.date))
    }
    
    return dateArr.reduce((acc,next)=> acc + next)

}

function calculatePayroll(arr) {
    let employeeArr = []
    for (const obj of arr) {
        employeeArr.push (allWagesFor(obj))
    }
    return employeeArr.reduce((acc,next)=> acc + next)
}