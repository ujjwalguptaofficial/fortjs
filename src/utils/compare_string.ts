export const compareString = (str1, str2) => {
    return new RegExp('^' + str1 + '$', 'i').test(str2);
}