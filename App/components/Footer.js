import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View, ClippingRectangle } from "react-native"

const Footer = (props) => {
	return(<View
        pointerEvents="box-none"
        style={{
            position: "absolute",
            left: 36,
            right: 38,
            bottom: 28,
            height: 108,
            justifyContent: "flex-end",
            alignItems: "center",
        }}>
			<Text
								style={styles.resultText}>Placeholder</Text>
        <TouchableOpacity
            onPress={this.onMorePressed}
            style={styles.moreButton}>
            <Text
                style={styles.moreButtonText}>More…</Text>
        </TouchableOpacity>
        <Image
            source={require("./../../assets/images/line-4.png")}
            style={styles.lineTwoImage}/>
        <View
            pointerEvents="box-none"
            style={{
                alignSelf: "stretch",
                height: 71,
                flexDirection: "row",
                alignItems: "flex-end",
            }}>
            <Image
                source={require("./../../assets/images/translate.png")}
                style={styles.translateImage}/>
            <View
                style={{
                    flex: 1,
                }}/>
            <Text
                style={styles.usingTheSignToWoText}>With the translate feature , sign into your  camera to receive a written English translation</Text>
        </View>
    </View>
    )
    };

const styles = StyleSheet.create({
    TranslateHomeView: {
		backgroundColor: "white",
		flex: 1,
	},
	resultText: {
		backgroundColor: "transparent",
		color: "rgba(255, 255, 255, 0.75)",
		fontSize: 27,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "right",
	},
    moreButtonImage: {
		resizeMode: "contain",
		marginRight: 10,
	},
	moreButton: {
		backgroundColor: "transparent",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 0,
		alignSelf: "flex-end",
		width: 55,
		height: 20,
		marginRight: 33,
		marginBottom: 9,
	},
	moreButtonText: {
		color: "rgba(0, 0, 238, 0.75)",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
	},
	lineTwoImage: {
		backgroundColor: "transparent",
		resizeMode: "cover",
		width: 247,
		height: 2,
		marginBottom: 11,
	},
	translateImage: {
		backgroundColor: "transparent",
		resizeMode: "center",
		width: 73,
		height: 65,
		marginBottom: 3,
	},
	usingTheSignToWoText: {
		color: "rgb(103, 26, 87)",
		fontFamily: "Arial-BoldMT",
		fontSize: 16,
		fontStyle: "normal",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 0.19,
		backgroundColor: "transparent",
		width: 256,
	},
})
            
 export default Footer;