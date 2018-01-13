var env = process.env.NODE_ENV;
import firebase from 'firebase'
import config from './config'
firebase.initializeApp(config.firebase)
console.log('ENV ' + env);

export default {
	rootRef(path) {
		return firebase.database().ref(`/${path}`)
	},
	ref(path) {
		return firebase.database().ref(`${config.app_name}/${path}`)
	}
}
