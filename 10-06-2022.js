
//    Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//    HH = hours, padded to 2 digits, range: 00 - 99
//    MM = minutes, padded to 2 digits, range: 00 - 59
//    SS = seconds, padded to 2 digits, range: 00 - 59
//    The maximum time never exceeds 359999 (99:59:59)
   
//    You can find some examples in the test fixtures. 


function humanReadable (seconds) {
  let test ={
    hours : "0",
    minutes : "0",
    seconds : "0",
        answer(hours,minutes,seconds){
            if (Number(seconds) <= 9 && Number(minutes)=== 0 && Number(hours) === 0){
                return `00:00:0${seconds}`
            }else if(seconds.length === 2 && Number(minutes)=== 0 && Number(hours) === 0){
                return `00:00:${seconds}`
            }else if(seconds.length === 1 && Number(minutes) <= 9 && Number(hours) === 0){
                return `00:0${minutes}:0${seconds}`
            }else if(seconds.length === 2 && Number(minutes) <= 9 && Number(hours) === 0){
                return `00:0${minutes}:${seconds}`
            }else if(seconds.length === 2 && minutes.length === 2 && Number(hours) === 0){
                return `00:${minutes}:${seconds}`
            }else if(Number (seconds) <= 9 && Number(minutes) <= 9 && Number(hours) <= 9){
                return `0${hours}:0${minutes}:0${seconds}`
            }else if(Number (seconds) <= 9 && minutes.length === 2 && Number(hours) <= 9){
                return `0${hours}:${minutes}:0${seconds}`
            }else if(Number (seconds) <= 9 && Number(minutes) <= 9 && hours.length === 2){
                return `${hours}:0${minutes}:0${seconds}`
            }else if(seconds.length === 2 && Number(minutes) <= 9 && hours.length === 2){
                return `${hours}:0${minutes}:${seconds}`
            }else if(seconds.length === 2 && minutes.length === 2 && Number(hours) <= 9){
                return `0${hours}:${minutes}:${seconds}`
            }else if(seconds.length === 2 && minutes.length === 2 && hours.length === 2){
                return `${hours}:${minutes}:${seconds}`
            }else if(Number(seconds) <= 9 && minutes.length === 2 && hours.length === 2){
                return `${hours}:${minutes}:0${seconds}`
            }
        }
    }
  
  let secondss = seconds,
      minutes = 0,
      hours = 0;
    if(secondss >= 60){
      minutes = secondss / 60
      if(minutes >= 60){
        hours = minutes / 60
        if(hours > 100){
          hours =  hours / 60
        }
      }
    }
    if(secondss < 60){
      test.seconds = Math.round(secondss).toString()
    } else if(minutes < 60){
        test.minutes = Math.floor(minutes).toString() 
        secondss = 60 * (minutes % 1)
        if(secondss % 1 !== 0 || secondss < 60){
          test.seconds = Math.round(secondss).toString()
        }
    }else if(hours % 1 !== 0 || hours <= 99){
      test.hours = Math.floor(hours).toString()
      minutes = 60 * (hours % 1)
      if(minutes % 1 !== 0){
        test.minutes = Math.round(minutes).toString()
        secondss = 60 * (minutes % 1)
        if(secondss % 1 !== 0){
          test.seconds = Math.round(secondss).toString()
        }
      }
    }
    
  return test.answer(test.hours,test.minutes,test.seconds)
  }

  

//  function answer(hours,minutes,seconds){
//     if (Number(seconds) <= 9 && Number(minutes)=== 0 && Number(hours) === 0){
//             return `00:00:0${seconds}`
//         }else if(seconds.length === 2 && Number(minutes)=== 0 && Number(hours) === 0){
//             return `00:00:${seconds}`
//         }else if(seconds.length === 1 && Number(minutes) <= 9 && Number(hours) === 0){
//             return `00:0${minutes}:0${seconds}`
//         }else if(seconds.length === 2 && Number(minutes) <= 9 && Number(hours) === 0){
//             return `00:0${minutes}:${seconds}`
//         }else if(seconds.length === 2 && minutes.length === 2 && Number(hours) === 0){
//             return `00:${minutes}:${seconds}`
//         }else if(Number (seconds) <= 9 && Number(minutes) <= 9 && Number(hours) <= 9){
//             return `0${hours}:0${minutes}:0${seconds}`
//         }else if(Number (seconds) <= 9 && minutes.length === 2 && Number(hours) <= 9){
//             return `0${hours}:${minutes}:0${seconds}`
//         }else if(Number (seconds) <= 9 && Number(minutes) <= 9 && hours.length === 2){
//             return `${hours}:0${minutes}:0${seconds}`
//         }else if(seconds.length === 2 && Number(minutes) <= 9 && hours.length === 2){
//             return `${hours}:0${minutes}:${seconds}`
//         }else if(seconds.length === 2 && minutes.length === 2 && Number(hours) <= 9){
//             return `0${hours}:${minutes}:${seconds}`
//         }else if(seconds.length === 2 && minutes.length === 2 && hours.length === 2){
//             return `${hours}:${minutes}:${seconds}`
//         }else if(Number(seconds) <= 9 && minutes.length === 2 && hours.length === 2){
//             return `${hours}:${minutes}:0${seconds}`
//         }
// }

  humanReadable(196380)

// answer("7","27","44")