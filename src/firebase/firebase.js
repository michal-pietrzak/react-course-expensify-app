import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });


// // database.ref('expenses')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 		const expenses = [];

// // 		snapshot.forEach((childSnapshot) => {
// // 			expenses.push({
// // 				id: childSnapshot.key,
// // 				...childSnapshot.val()
// // 			});
// // 		});
// // 		console.log(expenses);
// // 	});


// // subscribe to changes in the database
// // database.ref('expenses')
// // 	.on('value', (snapshot) => {
// // 		const expenses = [];

// // 		snapshot.forEach((childSnapshot) => {
// // 			expenses.push({
// // 				id: childSnapshot.key,
// // 				...childSnapshot.val()
// // 			});
// // 		});
// // 		console.log(expenses);
// // 	});



// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: 'pay by the 5th of each month',
// 	amount: 2300,
// 	createdAt: '94958483943'
// });

// // database.ref('notes').push({
// // 	title: 'Course topics',
// // 	body: 'React, Redux, Node.js'
// // });

// // database.ref('notes/-LAnK_EUdoRKDzzsJuv7').remove();

// // database.ref('notes').set(notes);

// // const onValueChange = database.ref().on('value', (snapshot) => {
// // 	const name = snapshot.val().name
// // 		, worksAs = snapshot.val().job.title
// // 		, worksAt = snapshot.val().job.company;
// // 	console.log(`${name} is a ${worksAs} at ${worksAt}`);
// // }, (e) => {
// // 	console.log('Error', e)
// // });


// // setTimeout(() => {
// // 	database.ref('age').set(48);
// // }, 3500);

// // setTimeout(() => {
// // 	database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// // 	database.ref('age').set(49);
// // }, 10500);

// // database.ref('location/city')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 		const val = snapshot.val();
// // 		console.log(val);
// // 	})
// // 	.catch((e) => {
// // 		console.log('Error fetching data', e)
// // 	});

// // database.ref().set({
// // 	name: 'Michal Pietrzak',
// // 	age: 46,
// // 	stressLevel: 6,
// // 	job: {
// // 		title: 'Software developer',
// // 		company: 'Google',
// // 	},
// // 	location: {
// // 		city: 'Lodz',
// // 		country: 'Poland'
// // 	}
// // }).then(() => {
// // 	console.log('Data is saved!');
// // }).catch((e) => {
// // 	console.log('There was an error.' + e);
// // });

// // database.ref().update({
// // 	stressLevel: 9,
// // 	'job/company': 'Amazon',
// // 	'location/city': 'Seattle'
	
// // });

// // database.ref('isSingle')
// // 	.remove()
// // 	.then(() => {
// // 		console.log('Remove successful');
// // 	})
// // 	.catch((e) => {
// // 		console.log('Korerror...', e);
// // 	});

