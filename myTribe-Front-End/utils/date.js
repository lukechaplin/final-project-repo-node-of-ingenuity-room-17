const getDateDisplay = () => {
	const date = new Date();
	const [month, day, year] = [
		date.getMonth(),
		date.getUTCDate(),
		date.getFullYear(),
	];
	console.log(day);
	const finalMonth = parseMonth(month);
	const finalDateString = `${day} ${finalMonth} ${year}`;
	return finalDateString;
};

const parseMonth = (month) => {
	switch (month) {
		case 0:
			return 'January';
		case 1:
			return 'February';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
	}
};

export default getDateDisplay;