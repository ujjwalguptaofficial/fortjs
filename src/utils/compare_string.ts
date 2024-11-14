export const compareString = (str1, str2) => {
    return str1?.toLowerCase() === str2?.toLowerCase();
    // return new RegExp('^' + str1 + '$', 'i').test(str2);
}
