var _ = require('lodash')
var moment = require('moment')
var firebase = require('firebase')
export default {
	computed: {
	},
	methods: {
		firebaseTimestamp() {
			return firebase.database.ServerValue.TIMESTAMP
		},
        // helper for firebase values
        parseValue(val) {
            return val || ""
        }
	}
}
