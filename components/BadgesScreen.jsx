import { Text, Image, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { getAllBadges, getUser } from "../Api/getApi";
import React, { useState, useEffect, useContext } from "react";
import { userContext } from "../contexts/userContext";
export const BadgesScreen = ({ navigation, badgeMessage }) => {
	const { user } = useContext(userContext);
	const [badges, setBadges] = useState([]);
	const [data, setData] = useState([]);
	const [url, setUrl] = useState([]);
	let error = "";
	console.log(badgeMessage);
	useEffect(() => {
		getAllBadges()
			.then((badgesFromApi) => {
				if (badgesFromApi) {
					setBadges(badgesFromApi);
				}
			})
			.catch((err) => {
				error = "Something has gone wrong!";
			});
	}, [user, badgeMessage]);
	let badgeArr = [];
	let greyBadgeArr = [];
	useEffect(() => {
		getUser(user)
			.then((dataFromApi) => {
				if (dataFromApi) return setData(dataFromApi.badges);
			})
			.then((err) => {
				error = "Something has gone wrong!";
			});
	}, [user, badgeMessage]);
	if (data.length === 0) greyBadgeArr = badges;
	badges.forEach((badge) => {
		return data.forEach((userBadge) => {
			if (badge === userBadge && !badgeArr.includes(badge)) {
				badgeArr.push(badge);
			}
		});
	});

	const normalList = () => {
		if (badgeArr.length === 0) return "";
		// return badgeArr.map((badge) => {
		// 	return (
		// 		<View style={styles.badge} key={`${badge.name}`}>
		// 			<Text>{error}</Text>
		// 			<Image
		// 				source={{ uri: badge.img_url }}
		// 				style={{ width: 100, height: 100 }}
		// 			/>
		// 			<Text style={styles.badgeText}>{badge.name}</Text>
		// 		</View>
		// 	);
		// });
	};
	const greyList = () => {
		// return greyBadgeArr.map((badge) => {
		// 	return (
		// 		<View style={styles.badge} key={badge.name}>
		// 			<Image
		// 				source={{ uri: badge.grey_url }}
		// 				style={{ width: 100, height: 100 }}
		// 			/>
		// 			<Text style={styles.badgeText}>{badge.name}</Text>
		// 		</View>
		// 	);
		// });
	};
	return (
		<ScrollView>
			<Text style={styles.badgeHeader}>My badges</Text>
			<View style={styles.container}>
				{badgeArr.map((badge) => {
					return (
						<View style={styles.badge} key={`${badge.name}`}>
							<Text>{error}</Text>
							<Image
								source={{ uri: badge.img_url }}
								style={{ width: 100, height: 100 }}
							/>
							<Text style={styles.badgeText}>{badge.name}</Text>
						</View>
					);
				})}
				{greyBadgeArr.map((badge) => {
					return (
						<View style={styles.badge} key={badge.name}>
							<Image
								source={{ uri: badge.grey_url }}
								style={{ width: 100, height: 100 }}
							/>
							<Text style={styles.badgeText}>{badge.name}</Text>
						</View>
					);
				})}
				{/* {normalList()} */}
				{/* {greyList()} */}
			</View>
		</ScrollView>
	);
};
const styles = StyleSheet.create({
	badgeHeader: {
		fontSize: 26,
		fontFamily: "System",
		fontWeight: "bold",
		textAlign: "center",
		justifyContent: "center",
		alignItems: "center",
		padding: 5,
		color: "#01937C",
		backgroundColor: "#FFC074",
	},
	container: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#FAF1E6",
		justifyContent: "space-evenly",
		alignItems: "center",
	},
	badge: {
		width: 120,
		height: 140,
		alignItems: "center",
		justifyContent: "center",
	},
	badgeText: {
		paddingTop: 5,
		textTransform: "capitalize",
		textAlign: "center",
		fontStyle: "italic",
	},
});
