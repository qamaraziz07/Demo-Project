import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";

const TimeSchedule = (props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.subView}>
            <Image source={props.Image} />
            <Text style={styles.subjectText}>{props.Subject}</Text>
          </View>
          <View style={styles.verticalLine}></View>
          <View>
            <View style={styles.subView}>
              <Text style={styles.periodNumber}>{props.PeriodNumber}</Text>
              <Text style={styles.periodTime}>{props.PeriodTime}</Text>
            </View>
          </View>
          <View style={styles.verticalLine}></View>

          <View style={styles.subView}>
            <Image source={props.TeacherImage} style={styles.teacherImage} />
            <Text>{props.Name}</Text>
            <Text style={styles.Teachersubject}>{props.TeacherSubject}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TimeSchedule;

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    height: "95%",
    width: "100%",
    backgroundColor: "#F1F5FF",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
  },
  subView: { alignItems: "center" },
  subjectText: { color: "#245A86", fontSize: 10 },
  periodNumber: {
    backgroundColor: "lightgrey",
    height: "50%",
    width: "80%",
    textAlign: "center",
    borderRadius: 8,
  },
  periodTime: { color: "#4FC4D8" },
  teacherImage: { borderRadius: 50, borderWidth: 2 },
  Teachersubject: { color: "#245A86", fontSize: 10 },
  verticalLine: { borderLeftWidth: 1, borderColor: "lightgrey" },
});
