export function reformateDateOfBirth(dob){
    let dateArray = dob.split('-')
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
}