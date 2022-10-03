export const capitalizeFirstLetter = ([first, ...rest]) =>
{
	return first.toUpperCase() + rest.join('');
};

export const capitalizeFirstLetterOfEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

export const isEmptyOrNullString = val => !val;
