import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import TimeSchedule from "../components/TimeSchedule";
import { AllSubjects } from "../dummyDB";

const Timetable = () => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.mainheader}>
          <AntDesign name="left" size={24} color="#BACAD3" />
          <Text style={styles.heading}>Timetable</Text>
          <Ionicons name="notifications-outline" size={24} color="#BACAD3" />
        </View>
        <View style={styles.grade}>
          <View style={styles.gradeView}>
            <Text style={styles.gradeText}>Third Grade</Text>
          </View>
          <View style={styles.borderLine}>
            <View style={styles.borderTab}></View>
          </View>
        </View>

        <View style={styles.daysContainer}>
          <View style={styles.sundayView}>
            <Text>Sunday</Text>
          </View>
          <View style={styles.mondayView}>
            <Text>Monday</Text>
          </View>
        </View>
        <FlatList
          data={AllSubjects}
          renderItem={({ item }) => (
            <TimeSchedule
              Image={item.subjectImage}
              Subject={item.subject}
              PeriodNumber={item.PeriodNumber}
              PeriodTime={item.PeriodTime}
              TeacherImage={item.TeacherImage}
              Name={item.TeacherName}
              TeacherSubject={item.subjectTeacher}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Timetable;

const styles = StyleSheet.create({
  mainheader: {
    backgroundColor: "#226CA3",
    height: 110,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  heading: { color: "#FAFBFF", fontSize: 18 },
  grade: { flex: 1, marginTop: 50 },
  gradeView: {
    backgroundColor: "#4FC4D8",
    width: "40%",
    height: 30,
    marginHorizontal: 120,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  gradeText: { textAlign: "center" },
  borderLine: { borderWidth: 1, borderColor: "#E6E8F0" },
  borderTab: {
    borderColor: "#4FC4D8",
    borderWidth: 2,
    width: 50,
    marginHorizontal: 20,
  },
  daysContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    margin: 50,
    marginHorizontal: 10,
  },
  sundayView: {
    backgroundColor: "#4FC4D8",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: 160,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  mondayView: {
    backgroundColor: "#226CA3",
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    width: 160,
    borderRadius: 15,
  },
});
