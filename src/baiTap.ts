// bài 1
// const checkStringExist = (
//   stringOrigin: string,
//   stringCheck: string
// ): boolean => {
//   const arr = stringOrigin.split(" ");
//   const value = arr.includes(stringCheck);
//   return value;
// };
// const value = checkStringExist("abc av", "a");

//bài 2

// const shortenString = (string: string): string => {
//   const newString = string.slice(0, 8) + "...";
//   return newString;
// };

// shortenString("xin chào các bạn");

// bài 3

// const multipleString = (string: string): string => {
//   let newString: string = "";
//   for (let i = 0; i < 10; i++) {
//     newString += string;
//   }
//   return newString;
// };

// console.log(multipleString("a"));

// bài 4

// const repeatString = (string: string): string => {
//   let newString: string = string;
//   for (let i = 0; i < 9; i++) {
//     newString += `-${string}`;
//   }
//   return newString;
// };

// console.log(repeatString("a"));

// bài 5

// const repeatString = (string: string, number: number): string => {
//   let newString: string = string;
//   for (let i = 0; i < number - 1; i++) {
//     newString += `-${string}`;
//   }
//   return newString;
// };

// console.log(repeatString("a", 10));

// bài 6

// const reverseString = (string: string): string => {
//   let newString: string = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }
//   return newString;
// };

// console.log(reverseString("abcdef"));

// bài 7

// const symmetryString = (stringOrigin: string): boolean => {
//   let newString: string = "";
//   for (let i = 0; i < stringOrigin.length; i++) {
//     if (stringOrigin[i] != " ") {
//       newString += stringOrigin[i].toLocaleLowerCase();
//     }
//   }
//   for (let i = 0; i < Math.floor(newString.length / 2); i++) {
//     if (newString[i] != newString[newString.length - i - 1]) {
//       console.log(newString[i], newString[newString.length - i - 1]);
//       return false;
//     }
//   }
//   return true;
// };

// console.log(symmetryString("Race c   a  r"));

// bài 8

// const checkUppercase = (string: string): boolean => {
//   if (string === string.toUpperCase()) {
//     return true;
//   }
//   return false;
// };

// console.log(checkUppercase("ABC"));

// bài 9

// const minNumber = (numberOrigin: number): number => {
//   const stringNumber = numberOrigin.toString();
//   const newArr = stringNumber.split("");
//   const result = newArr.sort();

//   return Number(result.join(""));
// };

// console.log(minNumber(35517));

// bài 10

// const convertCapitalize = (string: string): string => {
//   const arr = string.split(" ");
//   const newArr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
//   return newArr.join(" ");
// };

// console.log(convertCapitalize("Chào mừng bạn đến Amela"));

// bài 11

const subString = (string: string) => {
  const resultArr: string[] = [];
  //   console.log(resultArr.slice(1, 1));

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      resultArr.push(string.slice(i, j));
    }
  }
  return resultArr;
};

// console.log(subString("dog"));

// bài 12

// const decreaseOddArr = (arr: number[]): boolean => {
//   const isOddArr = arr.every((item) => item % 2 != 0);
//   const isDecreaseArr = arr.join("") === arr.sort().join("");

//   if (isOddArr && isDecreaseArr) {
//     return true;
//   }
//   return false;
// };

// console.log(decreaseOddArr([1, 3, 5]));

// bài 13

// interface user {
//   name: string;
//   age: number;
//   isStatus: boolean;
// }

// const getUsers = (listUser: user[]) => {
//   const newArr = listUser.filter(
//     (item) => item.age > 25 && item.isStatus === true
//   );
//   return newArr;
// };

// console.log(
//   getUsers([
//     { name: "test1", age: 28, isStatus: true },
//     { name: "test2", age: 28, isStatus: false },
//     { name: "test3", age: 88, isStatus: false },
//   ])
// );

// bài 14

// const getCurrentDate = (space: string) => {
//   const date = new Date();
//   return date.getDay() + space + date.getMonth() + space + date.getFullYear();
// };

// console.log(getCurrentDate("/"));

// bài 15

// const getDaysInMonth = (day: number) => {
//   const month = new Date().getMonth();
//   const year = new Date().getFullYear();
//   const isLastDay = new Date(year, month, day).getDay();
//   if (isLastDay === 0) {
//     return true;
//   }
//   return false;
// };

// const daysInMonth = getDaysInMonth(14);
// console.log(daysInMonth);

// bài 16
// const getDaysPassedInYear = (date: Date): number => {
//   const startOfYear = new Date(date.getFullYear(), 0, 1);
//   const timeDiff = date.getTime() - startOfYear.getTime();
//   const daysPassed = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
//   return daysPassed;
// }

// console.log(getDaysPassedInYear(new Date()));

// bài 17
// const getDaysPassedInYear = (date: Date): number => {
//   const day = date.getDay();
//   const date1 = date.getDate();
//   const diff = date1 - (day === 0 ? 6 : day - 1);
//   return diff;
// };

// console.log(getDaysPassedInYear(new Date()));

// bài 18

// const getRemainingDaysInMonth = (date: Date): number => {
//   const lastDayOfMonth = new Date(
//     date.getFullYear(),
//     date.getMonth() + 1,
//     0
//   ).getDate();
//   console.log(date.getFullYear(), date.getMonth(), lastDayOfMonth);

//   const remainingDays = lastDayOfMonth - date.getDate() + 1;
//   return remainingDays;
// }

// const remainingDays = getRemainingDaysInMonth(new Date());
// console.log(`Còn ${remainingDays} ngày nữa là hết tháng.`);

// bài 19

// const getDaysUntilNewYear = (): number => {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const newYearDate = new Date(currentYear + 1, 0, 1);
//   const timeDifference = newYearDate.getTime() - currentDate.getTime();
//   const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//   return daysRemaining;
// }

// const daysRemaining = getDaysUntilNewYear();
// console.log(`Còn ${daysRemaining} ngày nữa là Tết Dương lịch.`);
