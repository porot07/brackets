module.exports = function check(str, bracketsConfig) {
    const result = [str[0]];

    const dictionaryBrackets = bracketsConfig.reduce((acc, [open, close]) => ({ ...acc, [open]: close }), {});
    
    for (let cnt = 1; cnt < str.length; cnt += 1) {
      if (str[cnt] === dictionaryBrackets[result[result.length - 1]]) {
        result.pop();
      } else {
        result.push(str[cnt]);
      }
    }

    return result.length >= 1 ? false : true;
};
