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
    // console.log(obj)
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
    let dates = obj.timeInEvents.filter(el => el.date)
    for( el of dates){
        console.log(el.date)
       dateArr.push(wagesEarnedOnDate(obj, el.date))
       console.log(dateArr)
    }
    
    return dateArr.reduce((acc,next)=> acc + next)

}

function calculatePayroll(arr) {
    let employeeArr = []
    for (obj of arr) {
        employeeArr.push (allWagesFor(obj))
    }
    return employeeArr.reduce((acc,next)=> acc + next)
}


// const pracObj = createEmployeeRecord(['humpty', 'dumpty', 'rapper', 3])

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// // Earns 324
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
// // Earns 54
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// // 324 + 54
// console.log(allWagesFor(cRecord))

// const csvDataEmployees = [
//     ["Thor", "Odinsson", "Electrical Engineer", 45],
//     ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//     ["Natalia", "Romanov", "CEO", 150],
//     ["Darcey", "Lewis", "Intern", 15],
//     ["Jarvis", "Stark", "CIO", 125],
//     ["Anthony", "Stark", "Angel Investor", 300]
//   ]

//   const csvTimesIn = [
//     ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
//     ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
//     ["Natalia", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1300"]],
//     ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
//     ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
//     ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
//   ]

//   const csvTimesOut = [
//     ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Natalia", ["2018-01-01 2300", "2018-01-02 2300", "2018-01-03 2300"]],
//     ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
//     ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
//     ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
//   ]

//   let employeeRecords = createEmployeeRecords(csvDataEmployees)
//             employeeRecords.forEach(function (rec) {
//               let timesInRecordRow = csvTimesIn.find(function (row) {
//                 return rec.firstName === row[0]
//               })

//               let timesOutRecordRow = csvTimesOut.find(function (row) {
//                 return rec.firstName === row[0]
//               })

//               timesInRecordRow[1].forEach(function(timeInStamp){
//                 createTimeInEvent(rec, timeInStamp)
//               })

//               timesOutRecordRow[1].forEach(function(timeOutStamp){
//                 createTimeOutEvent(rec, timeOutStamp)
//               })

//             })

//             console.log(calculatePayroll(employeeRecords))


// console.log(createEmployeeRecord('gray', 'worm', 'security', 1))
// console.log(createEmployeeRecord(['humpty', 'dumpty', 'rapper', 3]))
// console.log(createTimeInEvent(pracObj, '2022-05-22 0800'))
// console.log(createTimeOutEvent(pracObj, '2022-05-22 1600'))
// console.log(createTimeInEvent(pracObj, '2022-06-22 0800'))
// console.log(createTimeOutEvent(pracObj, '2022-06-22 1600'))
// console.log('hours wroked')
// console.log(hoursWorkedOnDate(pracObj,'2022-05-22'))
// console.log(wagesEarnedOnDate(pracObj, '2022-05-22'))
// console.log(pracObj.timeInEvents)
// console.log('all wages')
// console.log(allWagesFor(pracObj))