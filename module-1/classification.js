/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...

    if (score < 0 || score > 100)
        return 0;

    const createArr = function(start, end) {
        const arr = new Array();
    
        for (let i = start; i <= end; i++)
            arr.push(i);
    
        return arr;
    }

    const templ = new Map([
        [1, createArr(0, 59)],
        [2, createArr(60, 69)],
        [3, createArr(70, 79)],
        [4, createArr(80, 89)],
        [5, createArr(90, 100)]
    ]);
    
    templ.forEach((value, key, map) => {
        if (value.includes(score))
            gradeOfStudent = key;
    });

    // ...AND THIS COMMENT LINE!

    return gradeOfStudent;
}
module.exports = grade;