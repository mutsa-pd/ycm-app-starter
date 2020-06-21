import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"



const BareScreenHeader = (props) => {
	return(
		<View
						style={styles.bgView}>
					<View
						pointerEvents="box-none"
							position: "absolute",
							left: 0,
							width: 289,
							top: 31,
							height: 74,
							alignItems: "center",
						}}>
						<Text
							style={styles.translateText}>Translate</Text>
						<Image
							source={require("../../assets/images/group-3.png")}
							style={styles.groupImage}/>
						<Image
							source={require("../../assets/images/line-3.png")}
							style={styles.lineImage}/>
					</View>
					</View>
	)
};
const styles = StyleSheet.create({
	TranslateHomeView: {
		backgroundColor: "white",
		flex: 1,
	},
	bgView: {
		backgroundColor: "rgb(247, 247, 247)",
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		height: 104,
	},
	translateText: {
		color: "rgb(103, 26, 87)",
		fontFamily: "Arial-BoldMT",
		fontSize: 34,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		lineHeight: 41,
		letterSpacing: 0.41,
		backgroundColor: "transparent",
	},
	groupImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 66,
		height: 8,
		marginTop: 11,
	},
	lineImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		alignSelf: "flex-start",
		width: 289,
		height: 3,
		marginTop: 10,
	},
})

export default BareScreenHeader;