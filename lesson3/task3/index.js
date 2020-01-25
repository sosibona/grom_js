/* сравнение чисел */

const a = 17;
const b = 5;
console.log('a > b: ', a > b);
console.log('a <= b: ', a <= b);
console.log('a == b: ', a == b);
console.log('a != b: ', a != b);
// a > b;
// a <= b;
// a == b;
// a != b;


/* сравнение строк */
console.log('\'a\' < \'b\': ', 'a' < 'b');
console.log('\'ab\' > \'a\': ', 'ab' > 'a');

// 'a' < 'b';
// 'ab' > 'a';

/* строгое сравнение */
console.log('17 === 1: ', 17 === 1);
console.log('17 === 17: ', 17 === 17);
console.log('17 === \'17\': ', 17 === '17');
console.log('17 === true: ', 17 === true);
console.log('\'0\' === \'\': ', '0' === '');

console.log('true === false: ', true === false);
console.log('true === true: ', true === true);
console.log('null === undefined: ', null === undefined);
console.log('false === 0: ', false === 0);

// 17 === 1;
// 17 === 17;
// 17 === '17';
// 17 === true;
// '0' === '';
// true === false;
// true === true;
// null === undefined;
// false === 0


/* нестрогое сравнение */
console.log('17 == \'17\': ', 17 == '17');
// 17 == '17';
console.log('\'0\' == \'\': ', '0' == '');
// '0' == '';
console.log('0 == \'\': ', 0 == '');
// 0 == '';
// null == undefined;
// false == 0;
console.log('null == undefined: ', null == undefined);
console.log('false == 0: ', false == 0);


/* осторожно c null и undefined */
console.log('undefined == null: ', undefine == null);
console.log('undefined == 0: ', undefined == 0);
console.log('null == 0: ', null == 0);
console.log('undefined < 0: ', undefined < 0);
console.log('undefined > 0: ', undefined > 0);
// undefined == null;
// undefined == 0;
// null == 0;
// undefined < 0;
// undefined > 0;